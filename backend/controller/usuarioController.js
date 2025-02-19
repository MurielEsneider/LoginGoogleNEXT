const Usuario = require('../models/usuarios');

const verUsuarios = async (req,res) => {
    try{
        const usuarios = await Usuario.findAll();
        res.json(usuarios);
    }catch(error){
        console.error(error);
        res.status(500).json({Mensaje: 'Error al obtener los usuarios', error: error.message});
    }
};

const registrarUsuario = async (req,res) => {
    try{
        const { nombre, correo, contrasena, rol } = req.body;
        if (!nombre || !correo || !contrasena || !rol) {
            return res.status(400).json({Mensaje: 'Todos los campos son obligatorios'});
        }
        const newUser = await Usuario.create({ nombre, correo, contrasena, rol });
        res.status(201).json(newUser);
    } catch(error){
        console.error(error);
        res.status(400).json({ Mensaje: 'Error al crear el usuario', error: error.message});
    }
};

const actualizarUsuario = async (req,res) => {
    try{
        const {id} = req.params;
        const [updated] = await Usuario.update(req.body,{ where: {id}});
        if (!updated){
            return res.status(404).json({Mensaje: 'Usuario no encontrado'});
        }
        res.json({Mensaje: 'Usuario actualizado correctamente'});
    }catch(error){
        console.error(error);
        res.status(400).json({Mensaje: 'Error al actualizar el usuario', error: error.message});
    }
};

const eliminarUsuario = async (req,res) => {
    try{
        const {id} = req.params;
        const resultado = await Usuario.destroy({ where: {id}});
        if(!resultado){
            return res.status(404).json({Mensaje: 'Usuario no encontrado'});
        }
        res.json({Mensaje: 'Usuario eliminado'});
    }catch(error){
        console.error(error);
        res.status(500).json({Mensaje: 'Error al eliminar el usuario' , error: error.message});
    }
};

module.exports = {verUsuarios, registrarUsuario, actualizarUsuario, eliminarUsuario};
