const Apartamento = require('../models/apartamentos');
const Propietario = require('../models/propietarios');
const Pago = require('../models/pagos');

const verApartamentos = async (req,res) => {
    try{
        const apartamento = await Apartamento.findAll();
        res.json(apartamento);
    }catch(error){
        console.error(error);
        res.status(500).json({Mensaje: 'Error al obtener los apartamentos de Villa del Sol'});
    }
};

const registrarApartamento = async (req,res) => {
    try{
        const {numero, torre, propietario_id} = req.body;
        if (!numero){
            return res.status(400).json({Mensaje: 'El número del apartamento es requerido'});
        }
        const newapartamento = await Apartamento.create({numero, torre, propietario_id});
        res.status(201).json({Mensaje: 'Apartamento registrado correctamente', apartamento: newapartamento});
    } catch (error){
        console.error(error);
        res.status(400).json({Mensaje: 'Error al registrar apartamento'});
    }
};

const asignarApartamento = async (req,res) => {
    try{
        const {propietario_id} = req.body;

        // Buscar apartamentos disponibles
        const apartamentosDisponibles = await Apartamento.findAll({ where : { propietario_id: null } });

        if(apartamentosDisponibles.length === 0){
            return res.status(404).json({Mensaje: 'No hay apartamentos disponibles'});
        }
        // Asigna el primer apartamento disponible
        const apartamento = apartamentosDisponibles[0];

        const propietario = await Propietario.findByPk(propietario_id);
        if (!propietario){
            return res.status(404).json({Mensaje: 'Propietario no encontrado'});
        }
        await apartamento.update({propietario_id});

        res.status(200).json({Mensaje: 'Apartamento asignado correctamente ',
            apartamento: {
                id: apartamento.id,
                numero: apartamento.numero,
                torre: apartamento.torre,
                propietario_id: apartamento.propietario_id,
            }
        });
    } catch (error){
        console.error(error);
        res.status(400).json({Mensaje: 'Error al asignar apartamento'});
    }
};

const obtenerPagos = async (req,res) => {
    try{
        const { id } = req.params;
        let pagos;
        if (id) {
            pagos = await Pago.findByPk(id);
            if (!pagos) {
                return res.status(404).json({Mensaje: 'Pago no encontrado'});
            }
        } else {
            pagos = await Pago.findAll();
        }
        res.json(pagos);
    } catch(error){
        console.error(error);
        res.status(500).json({Mensaje: 'Error al obtener los pagos'});
    }
};

const registrarPago = async (req,res) => { 
    try{
        const { apartamento_id, monto, fecha_pago, estado } = req.body;
        if (monto < 0){
            return res.status(400).json({Mensaje: 'El monto no puede ser negativo'});
        }
    
        const newPago = await Pago.create({ apartamento_id, monto, fecha_pago, estado });
        res.status(201).json(newPago);
    } catch(error){
        return res.status(400).json({ Mensaje: 'Error al registrar el pago', error});
    }
};

module.exports = {registrarApartamento, asignarApartamento, verApartamentos, obtenerPagos, registrarPago};
