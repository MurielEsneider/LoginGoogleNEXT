// routes/publicacionesRoutes.js
const express = require('express');
const router = express.Router();
const publicacionesController = require('../controllers/publicacionesArrendatarioController');

// Obtener todas las publicaciones
router.get('/publicacion', publicacionesController.obtenerPropiedades);
router.post('/publicacion', publicacionesController.crearPropiedad);
router.delete('/publicacion/:id', publicacionesController.eliminarPropiedad);
// Obtener una publicación por ID
/* router.get('/ obetener/:id', publicacionesController.getPublicacionById);

// Crear una nueva publicación
router.post('/publicar', publicacionesController.createPublicacion); */


module.exports = router;
