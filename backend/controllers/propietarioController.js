
const { Propietario } = require('../models');

// GET: Obtener todos los propietarios
const getPropietarios = async (req, res) => {
  try {
    const propietarios = await Propietario.findAll();
    res.status(200).json(propietarios);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener los propietarios' });
  }
};

// POST: Crear un nuevo propietario
const createPropietario = async (req, res) => {
  try {
    const { nombre, email } = req.body;

    // Validaciones mínimas
    if (!nombre || !email) {
      return res.status(400).json({ error: 'Faltan campos requeridos (nombre, email)' });
    }

    const nuevoPropietario = await Propietario.create({
      nombre,
      email
    });

    res.status(201).json({
      message: 'Propietario creado exitosamente',
      propietario: nuevoPropietario
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al crear el propietario' });
  }
};

// DELETE: Eliminar un propietario por ID
const deletePropietario = async (req, res) => {
  try {
    const { id } = req.params;

    const propietario = await Propietario.findByPk(id);
    if (!propietario) {
      return res.status(404).json({ error: 'Propietario no encontrado' });
    }

    await propietario.destroy();
    res.status(200).json({ message: 'Propietario eliminado correctamente' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al eliminar el propietario' });
  }
};

module.exports = {
  getPropietarios,
  createPropietario,
  deletePropietario
};
