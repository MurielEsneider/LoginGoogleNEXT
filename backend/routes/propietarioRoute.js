const express = require('express');
const router = express.Router();
const propietarioController = require('../controllers/propietarioController');

router.get('/propietario', propietarioController.getPropietarios);
router.post('/propietario', propietarioController.createPropietario);
router.delete('/propietario/:id', propietarioController.deletePropietario);

module.exports = router;