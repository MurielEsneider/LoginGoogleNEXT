const express = require('express');
const router = express.Router();
const reportesController = require('../controllers/reportesController');

// Obtener todas las publicaciones
router.get('/reportes', reportesController.obtenerReportes);
router.post('/reportes', reportesController.crearReporte);




module.exports = router;
