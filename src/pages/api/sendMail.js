const nodemailer = require('nodemailer');

// Configura el transporte
const transporter = nodemailer.createTransport({
  host: 'smtp.ethereal.email', // Reemplaza con el servidor SMTP que estés utilizando
  port: 587, // Reemplaza con el puerto del servidor SMTP
  secure: false, // Cambia a "true" si estás utilizando SSL/TLS
  auth: {
    user: 'fabian.hauck@ethereal.email', // Reemplaza con tu usuario de correo electrónico
    pass: 'TeeJ1JxQ9PuafwEPjR', // Reemplaza con tu contraseña de correo electrónico
  },
  tls: {
    rejectUnauthorized: false,
  },
});

// Función para enviar el correo electrónico
const sendEmail = async (name, email, message) => {
  try {
    // Configura el contenido del correo electrónico
    const mailOptions = {
      from: email, // Reemplaza con tu dirección de correo electrónico
      to: 'emilio.lihue.q@gmail.com', // Reemplaza con la dirección de correo electrónico del destinatario
      subject: 'Consulta', // Reemplaza con el asunto del correo electrónico
      text: `Nombre: ${name}\nEmail: ${email}\nMensaje: ${message}`, // Reemplaza con el contenido del correo electrónico
    };

    // Envía el correo electrónico
    const info = await transporter.sendMail(mailOptions);

    console.log('Correo electrónico enviado:', info.messageId);
    return true;
  } catch (error) {
    console.error('Error al enviar el correo electrónico:', error);
    throw error;
  }
};

module.exports = sendEmail;