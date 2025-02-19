const Usuario = require('../models/usuarios');
const Visitante = require('../models/visitantes');
const Apartamento = require('../models/apartamentos');

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

const verVisitantes = async (req,res) => {
    try{
        const { fecha } = req.query;
        let visitantes;
        if (fecha) {
            visitantes = await Visitante.findAll({ where: { fechaHoraEntrada: fecha } });
        } else {
            visitantes = await Visitante.findAll();
        }
        res.json(visitantes);
    }catch(error){
        console.error(error);
        res.status(500).json({Mensaje: 'Error al obtener los visitantes'});
    }
}

const registrarVisitante = async (req,res) => {
    try{
        const {nombre, fechaHoraEntrada, apartamento_id, guardia_id } = req.body;

        const apartamento = await Apartamento.findByPk(apartamento_id);
        if (!apartamento) {
            return res.status(404).json({Mensaje: 'Apartamento no encontrado'});
        }
        const guardia  = await Usuario.findOne({where: {id: guardia_id, rol: 'Guardia'}});
        if (!guardia) {
            return res.status(404).json({Mensaje: 'Guardia no encontrado'});
        }
        if(guardia.estado !== 'activo'){
            return res.status(400).json({Mensaje: 'El guardia no se encuentra activo'});
        }

        const newVisitante = await Visitante.create({nombre, fechaHoraEntrada, apartamento_id, guardia_id});
        res.status(201).json(newVisitante);

    }catch(error){
        res.status(400).json({Mensaje: 'Error al registrar el visitante' , error: error.message});
    }
};

const actualizarVisitante = async (req,res) => {
    try{
        const {id} = req.params;
        const visitante = await Visitante.findByPk(id);
        if(!visitante){
            return res.status(404).json({Mensaje: 'Visitante no encontrado'});
        }
        await visitante.update(req.body);
        res.json({Mensaje: 'Visitante actualizado correctamente'});
    }catch(error){
        res.status(400).json({Mensaje: 'Error al actualizar el visitante'});
    }
};

module.exports = {verUsuarios, registrarUsuario, actualizarUsuario, eliminarUsuario, verVisitantes, registrarVisitante, actualizarVisitante};
