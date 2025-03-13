const nodemailer = require("nodemailer");

let reportes = []; // Simulación de base de datos en memoria

const enviarCorreo = async (reporte) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // Tu correo
        pass: process.env.EMAIL_PASS, // Tu contraseña o App Password
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "propietario@ejemplo.com", // Cambia esto al correo del propietario
      subject: `Nuevo Reporte: ${reporte.asunto}`,
      text: `Mensaje de: ${reporte.nombre} (${reporte.email})\n\n${reporte.mensaje}`,
    };

    await transporter.sendMail(mailOptions);
    console.log("Correo enviado correctamente.");
  } catch (error) {
    console.error("Error enviando el correo:", error);
  }
};

const obtenerReportes = (req, res) => {
  res.json(reportes);
};

const crearReporte = async (req, res) => {
  const { nombre, email, asunto, mensaje } = req.body;
  if (!nombre || !email || !asunto || !mensaje) {
    return res.status(400).json({ error: "Todos los campos son obligatorios" });
  }

  const nuevoReporte = { id: reportes.length + 1, nombre, email, asunto, mensaje };
  reportes.push(nuevoReporte);
  
  await enviarCorreo(nuevoReporte); // Enviar correo al propietario

  res.status(201).json({ mensaje: "Reporte enviado y notificado al propietario", reporte: nuevoReporte });
};

module.exports = { obtenerReportes, crearReporte };
