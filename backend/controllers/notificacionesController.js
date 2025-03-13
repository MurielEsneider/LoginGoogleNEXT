// controllers/notificacionesController.js
const { Notificacion } = require("../models");

const getNotificacionesPropietario = async (req, res) => {
  try {
    // Suponiendo que req.user.uid contiene el UID del propietario autenticado
    const propietarioId = req.user.uid;

    const notificaciones = await Notificacion.findAll({
      where: {
        propietario_id: propietarioId,
      },
      order: [['createdAt', 'DESC']] // opcional: para ordenarlas de la más reciente a la más antigua
    });

    res.json(notificaciones);
  } catch (error) {
    console.error("Error obteniendo notificaciones para el propietario:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

module.exports = { getNotificacionesPropietario };
