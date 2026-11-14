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
              name: `${rawName} · ${rawInquiryType}`,
              email: rawEmail,
              inquiryType: rawInquiryType,
              message: `[Type de demande : ${rawInquiryType}]\n\n${rawMessage}`,
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

    // Template HTML Cyber-Minimalist Obsidian (compatible Gmail, Outlook, Apple Mail)
    const htmlTemplate = `
      <!DOCTYPE html>
      <html lang="fr">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Nouveau Message - Portfolio Andelson TEUFACK SONTSA</title>
        <style>
          * { margin: 0; padding: 0; box-sizing: border-box; }
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
            background-color: #030305;
            color: #f1f5f9;
            padding: 24px 12px;
            -webkit-font-smoothing: antialiased;
          }
          .email-wrapper {
            max-width: 600px;
            margin: 0 auto;
            background-color: #08080d;
            border: 1px solid rgba(0, 240, 255, 0.2);
            border-radius: 20px;
            overflow: hidden;
            box-shadow: 0 20px 50px rgba(0, 0, 0, 0.8), 0 0 30px rgba(0, 240, 255, 0.08);
          }
          .gradient-bar {
            height: 4px;
            background: linear-gradient(90deg, #00f0ff 0%, #a855f7 50%, #10b981 100%);
          }
          .header {
            padding: 36px 32px 28px;
            background: radial-gradient(circle at 50% 0%, rgba(0, 240, 255, 0.12) 0%, transparent 70%);
            border-bottom: 1px solid rgba(255, 255, 255, 0.08);
            text-align: center;
          }
          .logo-badge {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 52px;
            height: 52px;
            border-radius: 16px;
            background: #030305;
            border: 1.5px solid #00f0ff;
            color: #00f0ff;
            font-weight: 800;
            font-size: 20px;
            font-family: monospace;
            margin-bottom: 16px;
            box-shadow: 0 0 20px rgba(0, 240, 255, 0.3);
          }
          .status-pill {
            display: inline-block;
            padding: 5px 14px;
            border-radius: 9999px;
            background-color: rgba(16, 185, 129, 0.12);
            border: 1px solid rgba(16, 185, 129, 0.3);
            color: #34d399;
            font-size: 11px;
            font-weight: 700;
            font-family: monospace;
            letter-spacing: 0.5px;
            text-transform: uppercase;
            margin-bottom: 14px;
          }
          .header h1 {
            color: #ffffff;
            font-size: 24px;
            font-weight: 800;
            letter-spacing: -0.5px;
            margin-bottom: 6px;
          }
          .header p {
            color: #94a3b8;
            font-size: 14px;
          }
          .body-content {
            padding: 32px;
          }
          .section-tag {
            font-family: monospace;
            font-size: 11px;
            color: #00f0ff;
            text-transform: uppercase;
            letter-spacing: 1.5px;
            margin-bottom: 10px;
            display: block;
          }
          .info-card {
            background-color: rgba(255, 255, 255, 0.025);
            border: 1px solid rgba(255, 255, 255, 0.08);
            border-radius: 14px;
            padding: 18px 20px;
            margin-bottom: 24px;
          }
          .info-row {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 8px 0;
            border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          }
          .info-row:last-child { border-bottom: none; }
          .info-label {
            font-size: 13px;
            color: #94a3b8;
            font-weight: 500;
          }
          .info-val {
            font-size: 14px;
            color: #f8fafc;
            font-weight: 600;
          }
          .info-val a {
            color: #00f0ff;
            text-decoration: none;
          }
          .message-card {
            background-color: rgba(3, 3, 5, 0.8);
            border: 1px solid rgba(0, 240, 255, 0.2);
            border-left: 4px solid #00f0ff;
            border-radius: 14px;
            padding: 22px;
            margin-bottom: 28px;
          }
          .message-text {
            font-size: 15px;
            line-height: 1.65;
            color: #e2e8f0;
            white-space: pre-wrap;
            word-break: break-word;
          }
          .cta-wrapper {
            text-align: center;
            margin: 28px 0 12px;
          }
          .reply-btn {
            display: inline-block;
            background: linear-gradient(135deg, #00f0ff 0%, #a855f7 100%);
            color: #030305;
            font-weight: 800;
            font-size: 14px;
            padding: 14px 32px;
            border-radius: 12px;
            text-decoration: none;
            box-shadow: 0 10px 25px rgba(0, 240, 255, 0.25);
            transition: all 0.2s ease;
          }
          .footer {
            padding: 24px 32px;
            background-color: #030305;
            border-top: 1px solid rgba(255, 255, 255, 0.08);
            text-align: center;
          }
          .footer p {
            font-size: 12px;
            color: #64748b;
            margin-bottom: 12px;
          }
          .footer-links {
            margin-bottom: 14px;
          }
          .footer-links a {
            color: #00f0ff;
            text-decoration: none;
            font-size: 12px;
            font-family: monospace;
            margin: 0 10px;
          }
          .copyright {
            font-size: 11px;
            color: #475569;
            font-family: monospace;
          }
          @media (max-width: 600px) {
            body { padding: 8px; }
            .header { padding: 24px 20px; }
            .body-content { padding: 20px 16px; }
            .footer { padding: 20px 16px; }
          }
        </style>
      </head>
      <body>
        <div class="email-wrapper">
          <div class="gradient-bar"></div>
          
          <div class="header">
            <div class="logo-badge">AT</div>
            <br/>
            <div class="status-pill">● Message Direct Portfolio</div>
            <h1>Nouveau Message Reçu</h1>
            <p>Formulaire de contact · Andelson TEUFACK SONTSA</p>
          </div>

          <div class="body-content">
            <span class="section-tag">// 01. EXPÉDITEUR</span>
            <div class="info-card">
              <div class="info-row">
                <span class="info-label">Type de demande :</span>
                <span class="info-val">${safeInquiryType}</span>
              </div>
              <div class="info-row">
                <span class="info-label">Nom complet :</span>
                <span class="info-val">${safeName}</span>
              </div>
              <div class="info-row">
                <span class="info-label">Adresse email :</span>
                <span class="info-val">
                  <a href="mailto:${safeEmail}">${safeEmail}</a>
                </span>
              </div>
              <div class="info-row">
                <span class="info-label">Horodatage (Douala CM) :</span>
                <span class="info-val" style="font-family: monospace; font-size: 12px; color: #cbd5e1;">${formattedTime}</span>
              </div>
            </div>

            <span class="section-tag">// 02. CONTENU DU MESSAGE</span>
            <div class="message-card">
              <div class="message-text">${safeMessage}</div>
            </div>

            <div class="cta-wrapper">
              <a href="mailto:${safeEmail}?subject=Re:%20Votre%20message%20sur%20mon%20portfolio" class="reply-btn">
                ⚡ Répondre à ${safeName}
              </a>
            </div>
          </div>

          <div class="footer">
            <p>Ce message a été envoyé de manière sécurisée via le formulaire de contact de votre portfolio.</p>
            <div class="footer-links">
              <a href="https://www.linkedin.com/in/andelson-teufack-97a59b279/" target="_blank">LinkedIn</a> • 
              <a href="https://github.com/AndelsonTeufack" target="_blank">GitHub</a> • 
              <a href="https://andelson-teufack.dev" target="_blank">Site Web</a>
            </div>
            <div class="copyright">
              © ${new Date().getFullYear()} Andelson TEUFACK SONTSA · Développeur Full-Stack & Mobile
            </div>
          </div>
        </div>
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