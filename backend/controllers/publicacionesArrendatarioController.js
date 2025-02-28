// controllers/publicacionesArrendatarioController.js
const { Propiedad } = require('../models');
const upload = require('../config/upload'); // Importamos la configuración de Multer

const crearPropiedad = async (req, res) => {
  // Ejecutamos el middleware de Multer
  upload.single('imagen')(req, res, async (err) => {
    if (err) {
      return res.status(400).json({ error: err.message });
    }

    try {
      const { titulo, descripcion, direccion, precio, propietario_id } = req.body;
      
      if (!req.file) {
        return res.status(400).json({ error: 'Se requiere una imagen' });
      }

      const nuevaPropiedad = await Propiedad.create({
        titulo,
        descripcion,
        direccion,
        precio,
        imagen: req.file.filename,
        propietario_id
      });

      res.status(201).json({
        message: 'Propiedad creada exitosamente',
        id: nuevaPropiedad.id
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al crear la propiedad' });
    }
  });
};

const obtenerPropiedades = async (req, res) => {
  try {
    const propiedades = await Propiedad.findAll();
    res.status(200).json(propiedades);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener las propiedades' });
  }
};

const eliminarPropiedad = async (req, res) => {
  try {
    const { id } = req.params;
    const propiedad = await Propiedad.findByPk(id);

    if (!propiedad) {
      return res.status(404).json({ error: 'Propiedad no encontrada' });
    }

    await propiedad.destroy();
    res.status(200).json({ message: 'Propiedad eliminada exitosamente' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al eliminar la propiedad' });
  }
};

module.exports = {
  crearPropiedad,
  obtenerPropiedades,
  eliminarPropiedad
};
