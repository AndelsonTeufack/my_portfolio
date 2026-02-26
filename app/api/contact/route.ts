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
          /* Reset et styles de base */
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
            background-color: #f4f4f5;
            line-height: 1.6;
          }
          .container {
            max-width: 600px;
            margin: 20px auto;
            background-color: #ffffff;
            border-radius: 16px;
            overflow: hidden;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
          }
          .header {
            background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
            padding: 30px 20px;
            text-align: center;
          }
          .header h1 {
            color: #ffffff;
            font-size: 24px;
            font-weight: 600;
            margin: 0;
            letter-spacing: -0.5px;
          }
          .header p {
            color: rgba(255, 255, 255, 0.9);
            font-size: 14px;
            margin-top: 8px;
          }
          .content {
            padding: 30px 25px;
          }
          .field {
            margin-bottom: 20px;
          }
          .field-label {
            font-size: 14px;
            font-weight: 600;
            color: #1f2937;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            margin-bottom: 6px;
            display: flex;
            align-items: center;
            gap: 6px;
          }
          .field-label span {
            background-color: #6366f1;
            color: white;
            width: 24px;
            height: 24px;
            border-radius: 50%;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            font-size: 12px;
          }
          .field-value {
            background-color: #f9fafb;
            border-left: 4px solid #6366f1;
            padding: 12px 16px;
            border-radius: 8px;
            font-size: 15px;
            color: #1f2937;
            word-break: break-word;
          }
          .message-box {
            background-color: #f9fafb;
            border-left: 4px solid #8b5cf6;
            padding: 16px;
            border-radius: 8px;
            font-size: 15px;
            color: #1f2937;
            white-space: pre-wrap;
            max-height: 300px;
            overflow-y: auto;
          }
          .footer {
            background-color: #f3f4f6;
            padding: 20px;
            text-align: center;
            font-size: 13px;
            color: #6b7280;
            border-top: 1px solid #e5e7eb;
          }
          .footer a {
            color: #6366f1;
            text-decoration: none;
            font-weight: 500;
          }
          .footer a:hover {
            text-decoration: underline;
          }
          .social-links {
            margin-top: 10px;
            display: flex;
            justify-content: center;
            gap: 16px;
          }
          .social-links a {
            display: inline-block;
            width: 32px;
            height: 32px;
            background-color: #e5e7eb;
            border-radius: 50%;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            color: #4b5563;
            transition: all 0.2s;
          }
          .social-links a:hover {
            background-color: #6366f1;
            color: white;
          }
          @media (max-width: 600px) {
            .container {
              margin: 10px;
              border-radius: 12px;
            }
            .content {
              padding: 20px;
            }
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>✨ Nouveau message de contact</h1>
            <p>Vous avez reçu un message depuis votre portfolio</p>
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
                <a href="mailto:${escapeHtml(email)}" style="color:#6366f1; text-decoration:none;">${escapeHtml(email)}</a>
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
            <p>Cet email a été envoyé depuis le formulaire de contact de votre portfolio.</p>
            <div class="social-links">
              <a href="https://linkedin.com/in/andelson-teufack-97a59b279/" target="_blank" rel="noopener">in</a>
              <a href="https://github.com/AndelsonTeufack" target="_blank" rel="noopener">gh</a>
            </div>
            <p style="margin-top: 12px;">© 2026 Andelson Teufack. Tous droits réservés.</p>
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