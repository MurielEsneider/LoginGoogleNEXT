const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Usuario = require('./usuarios');
const Apartamento = require('./apartamentos');

const Visitante = sequelize.define('Visitante', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nombre: {
        type: DataTypes.STRING(80),
        allowNull: false,
    },
    fechaHoraEntrada: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    fechaHoraSalida: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    apartamento_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Apartamento,
            key: 'id',
        },
        onDelete: 'CASCADE',
    },
    guardia_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Usuario,
            key: 'id',
        },
        onDelete: 'CASCADE',
    },
}, {
    tableName: 'visitantes',
    timestamps: true,
});

Apartamento.hasMany(Visitante, { foreignKey: 'apartamento_id', as: 'visitantes' });
Visitante.belongsTo(Apartamento, { foreignKey: 'apartamento_id', as: 'apartamento' });

Usuario.hasMany(Visitante, { foreignKey: 'guardia_id', as: 'visitantes' });
Visitante.belongsTo(Usuario, { foreignKey: 'guardia_id', as: 'guardia' });

module.exports = Visitante;
