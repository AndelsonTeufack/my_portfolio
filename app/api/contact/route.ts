import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    // Validation basique des champs
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Tous les champs sont requis.' },
        { status: 400 }
      );
    }

    // Configuration du transporteur
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Template HTML moderne et responsive
    const htmlTemplate = `
      <!DOCTYPE html>
      <html lang="fr">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Nouveau message de contact</title>
        <style>
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
            background-color: #f5f7fa;
            line-height: 1.5;
            padding: 20px;
          }
          .container {
            max-width: 560px;
            margin: 0 auto;
            background-color: #ffffff;
            border-radius: 24px;
            overflow: hidden;
            box-shadow: 0 20px 35px -8px rgba(0, 0, 0, 0.1), 0 5px 12px -4px rgba(0, 0, 0, 0.05);
          }
          .header {
            background: #dc2626; /* Rouge vif */
            padding: 32px 28px;
            text-align: center;
            position: relative;
          }
          .header-logo {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 56px;
            height: 56px;
            background-color: white; /* Fond blanc pour contraster */
            border-radius: 18px;
            margin-bottom: 16px;
            overflow: hidden; /* Pour que l'image garde la forme */
            box-shadow: 0 4px 10px rgba(0,0,0,0.1);
          }
          .header-logo img {
            width: 100%;
            height: 100%;
            object-fit: cover; /* ou contain selon la favicon */
          }
          .header h1 {
            color: #000000; /* Noir */
            font-size: 26px;
            font-weight: 700;
            margin: 0 0 6px;
            letter-spacing: -0.3px;
          }
          .header p {
            color: #1f2937; /* Gris foncé pour le sous-titre */
            font-size: 15px;
            font-weight: 400;
          }
          .content {
            padding: 32px 28px;
          }
          .field {
            margin-bottom: 24px;
          }
          .field-label {
            display: flex;
            align-items: center;
            gap: 8px;
            font-size: 13px;
            font-weight: 600;
            color: #1e293b;
            text-transform: uppercase;
            letter-spacing: 0.3px;
            margin-bottom: 8px;
          }
          .field-label span {
            background-color: #eef2ff;
            color: #4f46e5;
            width: 26px;
            height: 26px;
            border-radius: 8px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            font-size: 14px;
            line-height: 1; /* Assure le centrage vertical */
          }
          .field-value {
            background-color: #f8fafc;
            border: 1px solid #e2e8f0;
            border-radius: 14px;
            padding: 14px 18px;
            font-size: 15px;
            color: #0f172a;
            word-break: break-word;
            transition: border 0.2s;
          }
          .field-value a {
            color: #4f46e5;
            text-decoration: none;
            font-weight: 500;
          }
          .field-value a:hover {
            text-decoration: underline;
          }
          .message-box {
            background-color: #f8fafc;
            border: 1px solid #e2e8f0;
            border-left: 4px solid #7c3aed;
            border-radius: 14px;
            padding: 16px 18px;
            font-size: 15px;
            color: #0f172a;
            white-space: pre-wrap;
            max-height: 300px;
            overflow-y: auto;
          }
          .footer {
            background-color: #f1f4f9;
            padding: 28px 24px;
            text-align: center;
            border-top: 1px solid #e2e8f0;
          }
          .footer p {
            font-size: 13px;
            color: #475569;
            margin-bottom: 12px;
          }
          .social-links {
            display: flex;
            justify-content: center;
            gap: 20px;
            margin: 16px 0 8px;
          }
          .social-links a {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 36px;
            height: 36px;
            background-color: #e2e8f0;
            border-radius: 12px;
            color: #334155;
            font-weight: 600;
            font-size: 16px;
            text-decoration: none;
            transition: all 0.2s;
          }
          .social-links a:hover {
            background-color: #4f46e5;
            color: white;
            transform: translateY(-2px);
          }
          .footer-note {
            margin-top: 16px;
            font-size: 12px;
            color: #64748b;
            border-top: 1px dashed #cbd5e1;
            padding-top: 16px;
          }
          @media (max-width: 600px) {
            body { padding: 10px; }
            .container { border-radius: 20px; }
            .header { padding: 24px 20px; }
            .content { padding: 24px 20px; }
            .footer { padding: 24px 20px; }
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <div class="header-logo">
              <img src="https://andelson-teufack-portfolio.vercel.app/favicon.ico" alt="AT" width="56" height="56">
            </div>
            <h1>✨ Nouveau message</h1>
            <p>Vous avez reçu un contact depuis votre portfolio</p>
          </div>
          <div class="content">
            <div class="field">
              <div class="field-label">
                <span>👤</span> Nom
              </div>
              <div class="field-value">${escapeHtml(name)}</div>
            </div>
            <div class="field">
              <div class="field-label">
                <span>📧</span> Email
              </div>
              <div class="field-value">
                <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a>
              </div>
            </div>
            <div class="field">
              <div class="field-label">
                <span>💬</span> Message
              </div>
              <div class="message-box">${escapeHtml(message).replace(/\n/g, '<br/>')}</div>
            </div>
          </div>
          <div class="footer">
            <p>Cet email a été envoyé via le formulaire de contact</p>
            <div class="social-links">
              <a href="https://linkedin.com/in/andelson-teufack-97a59b279/" target="_blank" rel="noopener">in</a>
              <a href="https://github.com/AndelsonTeufack" target="_blank" rel="noopener">gh</a>
            </div>
            <div class="footer-note">
              © 2026 Andelson Teufack · Tous droits réservés
            </div>
          </div>
        </div>
      </body>
      </html>
    `;

    // Version texte simple (fallback)
    const textTemplate = `
      Nouveau message de ${name}
      Email: ${email}
      Message: ${message}
    `;

    const mailOptions = {
      from: `"Andelson Teufack Portfolio" <${process.env.EMAIL_USER}>`,
      to: 'teufackandelson123@gmail.com',
      replyTo: email,
      subject: `📬 Nouveau message de ${name} (via portfolio)`,
      text: textTemplate,
      html: htmlTemplate,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({
      success: true,
      message: 'Email envoyé avec succès !',
    });
  } catch (error) {
    console.error('Erreur lors de l\'envoi:', error);
    return NextResponse.json(
      { error: 'Erreur lors de l\'envoi du message. Veuillez réessayer plus tard.' },
      { status: 500 }
    );
  }
}

// Fonction utilitaire pour échapper les caractères HTML et éviter les injections XSS
function escapeHtml(unsafe: string): string {
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}