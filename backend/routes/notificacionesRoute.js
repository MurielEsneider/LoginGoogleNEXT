const express = require('express');
const router = express.Router();
const notificacionesController = require('../controllers/notificacionesController');

// Obtener todas las publicaciones
router.get('/notificaciones', notificacionesController.getNotificacionesPropietario);


module.exports = router;
