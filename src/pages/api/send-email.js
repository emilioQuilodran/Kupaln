import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  const { name, email, message } = req.body;

  try {
    console.log("clientiD", process.env.CLIENT_ID)
    console.log("clientSecret", process.env.SECRET_CLIENT)
    console.log("refreshToken", process.env.REFRESH_TOKEN)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: email,
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.SECRET_CLIENT,
        refreshToken: process.env.REFRESH_TOKEN,
      },
      tls: {
        rejectUnauthorized: false, // Desactivar la verificación del certificado SSL
      },
    });


    const mailOptions = {
      from: email,
      to: process.env.EMAIL_ADDRESS,
      subject: 'Nuevo mensaje de contacto',
      text: `Nombre: ${name}\nCorreo electrónico: ${email}\nMensaje: ${message}`,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).end();
  } catch (error) {
    console.error('Error al enviar el correo electrónico:', error);
    res.status(500).json({ error: 'Error al enviar el correo electrónico' });
  }
}