import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 5;
const rateLimitStore = new Map<string, { count: number; resetAt: number }>();

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PROD_CONTACT_API_URL =
  process.env.PROD_CONTACT_API_URL ||
  'https://andelson-teufack-portfolio.vercel.app/api/contact';

function getClientIp(request: Request): string {
  const forwarded = request.headers.get('x-forwarded-for');
  if (forwarded) {
    return forwarded.split(',')[0].trim();
  }
  return request.headers.get('x-real-ip')?.trim() || 'unknown';
}

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  if (rateLimitStore.size > 1000) {
    for (const [key, entry] of rateLimitStore.entries()) {
      if (now > entry.resetAt) {
        rateLimitStore.delete(key);
      }
    }
  }

  const existing = rateLimitStore.get(ip);
  if (!existing || now > existing.resetAt) {
    if (existing) {
      rateLimitStore.delete(ip);
    }
    return false;
  }

  return existing.count >= RATE_LIMIT_MAX_REQUESTS;
}

function recordRateLimitHit(ip: string): void {
  const now = Date.now();
  const existing = rateLimitStore.get(ip);
  if (!existing || now > existing.resetAt) {
    rateLimitStore.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return;
  }
  existing.count += 1;
}

export async function POST(request: Request) {
  try {
    const clientIp = getClientIp(request);
    if (isRateLimited(clientIp)) {
      return NextResponse.json(
        { error: 'Trop de requêtes. Veuillez réessayer dans quelques minutes.' },
        { status: 429 }
      );
    }

    const body = await request.json();
    const rawName = typeof body?.name === 'string' ? body.name.trim() : '';
    const rawEmail = typeof body?.email === 'string' ? body.email.trim() : '';
    const rawInquiryType =
      typeof body?.inquiryType === 'string' && body.inquiryType.trim()
        ? body.inquiryType.trim().slice(0, 60)
        : 'Général';
    const rawMessage = typeof body?.message === 'string' ? body.message.trim() : '';
    const honeypot = typeof body?._gotcha_hp === 'string' ? body._gotcha_hp.trim() : '';

    // Honeypot anti-spam : rejet explicite (jamais de faux positif 200)
    if (honeypot.length > 0) {
      return NextResponse.json(
        { error: 'Requête bloquée par le filtre anti-spam.' },
        { status: 400 }
      );
    }

    // Validation stricte des champs obligatoires
    if (
      rawName.length < 2 ||
      rawName.length > 120 ||
      !EMAIL_REGEX.test(rawEmail) ||
      rawMessage.length < 5 ||
      rawMessage.length > 5000
    ) {
      return NextResponse.json(
        { error: 'Veuillez renseigner un nom, un email valide et un message (min. 5 caractères).' },
        { status: 400 }
      );
    }

    const emailUser = process.env.EMAIL_USER?.trim();
    const emailPass = process.env.EMAIL_PASS?.replace(/\s+/g, '');
    const isMissingCredentials =
      !emailUser ||
      !emailPass ||
      emailPass === 'votre_mot_de_passe_application_gmail_16_caracteres';

    if (isMissingCredentials) {
      if (!request.headers.get('x-portfolio-relay')) {
        try {
          const prodResponse = await fetch(PROD_CONTACT_API_URL, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'x-portfolio-relay': '1',
            },
            body: JSON.stringify({
              name: rawName,
              email: rawEmail,
              inquiryType: rawInquiryType,
              message: rawMessage,
            }),
          });

          const prodData = await prodResponse.json().catch(() => null);
          if (prodResponse.ok && prodData?.success === true) {
            recordRateLimitHit(clientIp);
            return NextResponse.json({
              success: true,
              message: 'Email envoyé avec succès !',
            });
          }

          return NextResponse.json(
            {
              error:
                prodData?.error ||
                'Erreur du relais SMTP de production. Veuillez réessayer plus tard.',
            },
            { status: prodResponse.ok ? 502 : prodResponse.status }
          );
        } catch (relayError) {
          console.warn('Échec du relais SMTP vers la production:', relayError);
        }
      }

      console.warn('Configuration SMTP manquante (EMAIL_USER / EMAIL_PASS).');
      return NextResponse.json(
        { error: 'Le service d’envoi est temporairement indisponible.' },
        { status: 503 }
      );
    }

    // Configuration du transporteur SMTP
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: emailUser,
        pass: emailPass,
      },
    });

    const formattedTime = new Date().toLocaleString('fr-FR', {
      timeZone: 'Africa/Douala',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    });

    const safeName = escapeHtml(rawName);
    const safeEmail = escapeHtml(rawEmail);
    const safeInquiryType = escapeHtml(rawInquiryType);
    const safeMessage = escapeHtml(rawMessage).replace(/\n/g, '<br/>');
    const cleanSubjectName = rawName.replace(/[\r\n]+/g, ' ');
    const cleanSubjectType = rawInquiryType.replace(/[\r\n]+/g, ' ');
    const replyMailtoSubject = encodeURIComponent(
      `Re: [Portfolio · ${cleanSubjectType}] Votre message`
    );

    // Template HTML Email responsive basé sur <table> (compatible Gmail Web/Mobile, Outlook, Apple Mail)
    const htmlTemplate = `
      <!DOCTYPE html>
      <html lang="fr">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="x-apple-disable-message-reformatting" />
        <title>Message de ${safeName} - Portfolio Andelson TEUFACK SONTSA</title>
        <style type="text/css">
          body, table, td, p, a {
            -webkit-text-size-adjust: 100%;
            -ms-text-size-adjust: 100%;
          }
          table, td {
            mso-table-lspace: 0pt;
            mso-table-rspace: 0pt;
          }
          body {
            margin: 0 !important;
            padding: 0 !important;
            background-color: #05070c;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
            color: #f8fafc;
          }
          @media only screen and (max-width: 520px) {
            .outer-td {
              padding: 12px 8px !important;
            }
            .header-td {
              padding: 24px 20px 20px 20px !important;
            }
            .content-td {
              padding: 22px 18px 24px 18px !important;
            }
            .footer-td {
              padding: 20px 18px !important;
            }
            .meta-card-td {
              padding: 4px 16px !important;
            }
            .meta-label {
              display: block !important;
              width: 100% !important;
              text-align: left !important;
              padding: 12px 0 2px 0 !important;
            }
            .meta-value {
              display: block !important;
              width: 100% !important;
              text-align: left !important;
              padding: 0 0 12px 0 !important;
            }
            .cta-table {
              width: 100% !important;
            }
            .cta-btn {
              display: block !important;
              width: 100% !important;
              box-sizing: border-box !important;
              text-align: center !important;
            }
          }
        </style>
      </head>
      <body style="margin: 0; padding: 0; background-color: #05070c;">
        <div style="display: none; max-height: 0; overflow: hidden; mso-hide: all;">
          ${safeInquiryType} — ${safeName} (${safeEmail}) : ${safeMessage.replace(/<br\/>/g, ' ').slice(0, 110)}
        </div>

        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #05070c; width: 100%;">
          <tr>
            <td align="center" class="outer-td" style="padding: 28px 16px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width: 600px; width: 100%; background-color: #0b101b; border: 1px solid #1e293b; border-radius: 16px; overflow: hidden;">
                <!-- Barre d'accentuation supérieure -->
                <tr>
                  <td style="height: 3px; line-height: 3px; font-size: 0; background-color: #0284c7; background: linear-gradient(90deg, #0284c7 0%, #38bdf8 50%, #10b981 100%);">&nbsp;</td>
                </tr>

                <!-- En-tête -->
                <tr>
                  <td align="center" class="header-td" style="padding: 32px 32px 26px 32px; border-bottom: 1px solid #1e293b; background-color: #0d1422;">
                    <table role="presentation" align="center" width="44" height="44" cellpadding="0" cellspacing="0" border="0" style="width: 44px; height: 44px; margin: 0 auto 16px auto; background-color: #111827; border: 1px solid #1e293b; border-radius: 12px;">
                      <tr>
                        <td align="center" valign="middle" style="width: 44px; height: 44px; font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace; font-size: 16px; font-weight: 800; line-height: 42px; color: #38bdf8; letter-spacing: 0.5px;">
                          AT
                        </td>
                      </tr>
                    </table>

                    <div style="margin-bottom: 14px;">
                      <span style="display: inline-block; padding: 5px 14px; border-radius: 999px; background-color: #06281e; border: 1px solid #065f46; color: #34d399; font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace; font-size: 11px; font-weight: 700; letter-spacing: 0.6px; text-transform: uppercase;">
                        NOUVEAU MESSAGE · ${safeInquiryType.toUpperCase()}
                      </span>
                    </div>

                    <h1 style="margin: 0 0 6px 0; font-size: 22px; line-height: 1.3; font-weight: 700; color: #f8fafc; letter-spacing: -0.3px;">
                      Message de ${safeName}
                    </h1>
                    <p style="margin: 0; font-size: 13px; line-height: 1.5; color: #94a3b8;">
                      Formulaire de contact · Andelson TEUFACK SONTSA
                    </p>
                  </td>
                </tr>

                <!-- Corps du message -->
                <tr>
                  <td class="content-td" style="padding: 28px 32px 32px 32px;">
                    <p style="margin: 0 0 10px 0; font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace; font-size: 11px; font-weight: 700; letter-spacing: 1px; text-transform: uppercase; color: #94a3b8;">
                      INFORMATIONS DE L’EXPÉDITEUR
                    </p>

                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="width: 100%; background-color: #111827; border: 1px solid #1e293b; border-radius: 12px; margin-bottom: 24px;">
                      <tr>
                        <td class="meta-card-td" style="padding: 6px 20px;">
                          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="width: 100%;">
                            <tr>
                              <td width="40%" align="left" valign="middle" class="meta-label" style="padding: 12px 12px 12px 0; border-bottom: 1px solid #1e293b; font-size: 13px; color: #94a3b8; font-weight: 500;">
                                Nom complet
                              </td>
                              <td width="60%" align="right" valign="middle" class="meta-value" style="padding: 12px 0; border-bottom: 1px solid #1e293b; font-size: 14px; color: #f8fafc; font-weight: 600;">
                                ${safeName}
                              </td>
                            </tr>
                            <tr>
                              <td width="40%" align="left" valign="middle" class="meta-label" style="padding: 12px 12px 12px 0; border-bottom: 1px solid #1e293b; font-size: 13px; color: #94a3b8; font-weight: 500;">
                                Adresse email
                              </td>
                              <td width="60%" align="right" valign="middle" class="meta-value" style="padding: 12px 0; border-bottom: 1px solid #1e293b; font-size: 14px; font-weight: 600;">
                                <a href="mailto:${safeEmail}" style="color: #38bdf8; text-decoration: none; word-break: break-all;">${safeEmail}</a>
                              </td>
                            </tr>
                            <tr>
                              <td width="40%" align="left" valign="middle" class="meta-label" style="padding: 12px 12px 12px 0; border-bottom: 1px solid #1e293b; font-size: 13px; color: #94a3b8; font-weight: 500;">
                                Type de demande
                              </td>
                              <td width="60%" align="right" valign="middle" class="meta-value" style="padding: 12px 0; border-bottom: 1px solid #1e293b;">
                                <span style="display: inline-block; background-color: #0c2a42; border: 1px solid #0369a1; color: #7dd3fc; padding: 3px 10px; border-radius: 6px; font-size: 12px; font-weight: 600;">
                                  ${safeInquiryType}
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td width="40%" align="left" valign="middle" class="meta-label" style="padding: 12px 12px 12px 0; font-size: 13px; color: #94a3b8; font-weight: 500;">
                                Reçu le (Douala · UTC+1)
                              </td>
                              <td width="60%" align="right" valign="middle" class="meta-value" style="padding: 12px 0; font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace; font-size: 12px; color: #cbd5e1; font-weight: 500;">
                                ${formattedTime}
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>

                    <p style="margin: 0 0 10px 0; font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace; font-size: 11px; font-weight: 700; letter-spacing: 1px; text-transform: uppercase; color: #94a3b8;">
                      MESSAGE
                    </p>

                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="width: 100%; background-color: #090d16; border: 1px solid #1e293b; border-left: 3px solid #38bdf8; border-radius: 12px; margin-bottom: 28px;">
                      <tr>
                        <td style="padding: 20px 22px;">
                          <p style="margin: 0; font-size: 15px; line-height: 1.7; color: #f1f5f9; word-break: break-word;">${safeMessage}</p>
                        </td>
                      </tr>
                    </table>

                    <table role="presentation" align="center" cellpadding="0" cellspacing="0" border="0" class="cta-table" style="margin: 0 auto;">
                      <tr>
                        <td align="center" style="border-radius: 10px; background-color: #38bdf8;">
                          <a href="mailto:${safeEmail}?subject=${replyMailtoSubject}" class="cta-btn" style="display: inline-block; padding: 13px 28px; font-size: 14px; font-weight: 700; color: #082f49; text-decoration: none; border-radius: 10px;">
                            Répondre à ${safeName} →
                          </a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <!-- Pied de page -->
                <tr>
                  <td align="center" class="footer-td" style="padding: 22px 32px; background-color: #080c15; border-top: 1px solid #1e293b;">
                    <p style="margin: 0 0 10px 0; font-size: 12px; line-height: 1.5; color: #64748b;">
                      Message envoyé via le formulaire de contact du portfolio.
                    </p>
                    <p style="margin: 0 0 12px 0; font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace; font-size: 12px; line-height: 1.6; color: #475569;">
                      <a href="https://www.linkedin.com/in/andelson-teufack-97a59b279/" target="_blank" style="color: #38bdf8; text-decoration: none;">LinkedIn</a>
                      &nbsp;·&nbsp;
                      <a href="https://github.com/AndelsonTeufack" target="_blank" style="color: #38bdf8; text-decoration: none;">GitHub</a>
                      &nbsp;·&nbsp;
                      <a href="https://wa.me/237690819035" target="_blank" style="color: #38bdf8; text-decoration: none;">WhatsApp</a>
                      &nbsp;·&nbsp;
                      <a href="https://andelson-teufack-portfolio.vercel.app" target="_blank" style="color: #38bdf8; text-decoration: none;">Portfolio</a>
                    </p>
                    <p style="margin: 0; font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace; font-size: 11px; line-height: 1.5; color: #64748b;">
                      © ${new Date().getFullYear()} Andelson TEUFACK SONTSA · Développeur Full-Stack &amp; Mobile · Douala, Cameroun
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
      </html>
    `;

    const textTemplate = `
      ======================================================
      NOUVEAU MESSAGE CLIENT / RECRUTEUR (PORTFOLIO)
      ======================================================
      Type de demande: ${rawInquiryType}
      Nom: ${rawName}
      Email: ${rawEmail}
      Date: ${formattedTime}
      
      ------------------------------------------------------
      MESSAGE:
      ------------------------------------------------------
      ${rawMessage}
      ======================================================
    `;

    const mailOptions = {
      from: `"Portfolio Andelson TEUFACK SONTSA" <${emailUser}>`,
      to: 'teufackandelson123@gmail.com',
      replyTo: rawEmail,
      subject: `📬 [PORTFOLIO · ${cleanSubjectType}] Nouveau message de ${cleanSubjectName}`,
      text: textTemplate,
      html: htmlTemplate,
    };

    const info = await transporter.sendMail(mailOptions);
    if (!info || !Array.isArray(info.accepted) || info.accepted.length === 0) {
      throw new Error('SMTP_RECIPIENT_REJECTED');
    }

    recordRateLimitHit(clientIp);

    return NextResponse.json({
      success: true,
      messageId: info.messageId,
      message: 'Email envoyé avec succès !',
    });
  } catch (error) {
    console.warn('Erreur lors de l\'envoi:', error);
    const err = error as { code?: string; responseCode?: number; message?: string };
    let errorMessage = 'Erreur lors de l\'envoi du message. Veuillez réessayer plus tard.';

    if (process.env.NODE_ENV !== 'production') {
      if (err?.code === 'EAUTH' || err?.responseCode === 535) {
        errorMessage =
          'Authentification Gmail refusée : vérifiez EMAIL_USER et utilisez un mot de passe d’application Gmail (16 caractères) dans .env.local.';
      } else if (
        err?.code === 'ESOCKET' ||
        err?.code === 'ETIMEDOUT' ||
        err?.code === 'ECONNREFUSED'
      ) {
        errorMessage =
          'Impossible de joindre le serveur SMTP Gmail (smtp.gmail.com:587). Vérifiez votre connexion réseau ou pare-feu.';
      } else if (err?.message === 'SMTP_RECIPIENT_REJECTED') {
        errorMessage = 'Le serveur SMTP a rejeté l’adresse destinataire.';
      }
    }

    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}

function escapeHtml(unsafe: string): string {
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}