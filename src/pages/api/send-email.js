import sendEmail from './sendMail';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    try {
      // Envía el correo electrónico
      await sendEmail(name, email, message);

      // Envía una respuesta exitosa
      res.status(200).end();
    } catch (error) {
      // Envía una respuesta de error
      res.status(500).json({ error: 'Error al enviar el correo electrónico' });
    }
  } else {
    // Envía una respuesta de error para solicitudes que no sean POST
    res.status(404).end();
  }
}