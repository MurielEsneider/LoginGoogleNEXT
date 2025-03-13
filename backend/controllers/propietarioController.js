
const { Propietario } = require('../models');
const admin = require('../config/firebaseAdmin');



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

// POST: Crear propietario con datos de Firebase

const createPropietario = async (req, res) => {
  try {
    // 1. Obtener el token de la cabecera
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) return res.status(401).json({ error: 'Token no proporcionado' });

    // 2. Decodificar el token con Firebase Admin y loguear su contenido
    const decodedToken = await admin.auth().verifyIdToken(token);
    console.log("Decoded token:", decodedToken);

    // 3. Extraer uid usando diferentes propiedades
    const uid = decodedToken.uid || decodedToken.sub || decodedToken.user_id;
    if (!uid) {
      console.error("No se encontró uid en el token:", decodedToken);
      return res.status(400).json({ error: 'El token no contiene uid' });
    }
    console.log("UID obtenido:", uid);

    // 4. Extraer el resto de la información
    const { displayName, email, photoURL } = decodedToken;
    const nombre = displayName || "Nombre no proporcionado";

    // 5. Verificar si el usuario ya existe en la base de datos
    const existePropietario = await Propietario.findOne({ where: { uid } });
    if (existePropietario) {
      return res.status(400).json({ error: 'El usuario ya es propietario' });
    }

    // 6. Crear el registro en la base de datos
    const nuevoPropietario = await Propietario.create({
      uid,
      nombre,
      email,
      fotoPerfil: photoURL
    });

    return res.status(201).json({
      message: 'Registro como propietario exitoso',
      propietario: nuevoPropietario
    });
  } catch (error) {
    console.error('Error en createPropietario:', error);
    return res.status(500).json({ error: error.message || 'Error al registrar propietario' });
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
