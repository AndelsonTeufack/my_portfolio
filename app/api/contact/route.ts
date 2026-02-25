import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    // Création du transporteur avec vos identifiants sécurisés
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      host: 'smtp.gmail.com',
      port: 587,
      secure: false, // true pour 465, false pour les autres ports
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Format de l'email (vous pouvez personnaliser selon vos préférences)
    const mailOptions = {
      from: `"Formulaire de contact" <${process.env.EMAIL_USER}>`,
      to: 'teufackandelson123@gmail.com', // Votre adresse de réception
      replyTo: email,
      subject: `Nouveau message de ${name} depuis votre portfolio`,
      text: `Nom: ${name}\nEmail: ${email}\nMessage:\n${message}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px;">
          <h2 style="color: #333;">Nouveau message de votre portfolio</h2>
          <p><strong>Nom:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px;">
            ${message.replace(/\n/g, '<br/>')}
          </div>
          <hr style="margin: 20px 0;">
          <p style="color: #666; font-size: 12px;">
            Cet email a été envoyé depuis le formulaire de contact de votre portfolio.
          </p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ 
      success: true, 
      message: 'Email envoyé avec succès !' 
    });
    
  } catch (error) {
    console.error('Erreur lors de l\'envoi:', error);
    return NextResponse.json({ 
      error: 'Erreur lors de l\'envoi du message' 
    }, { 
      status: 500 
    });
  }
}