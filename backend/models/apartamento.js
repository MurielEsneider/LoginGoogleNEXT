const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Propietario = require('./propietarios');

const Apartamento = sequelize.define('Apartamento', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    numero: {
        type: DataTypes.STRING(10),
        unique: true,
        allowNull: false
    },
    torre: {
        type: DataTypes.STRING(10),
        allowNull: true
    },
    propietario_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: Propietario,
            key: 'id',
        },
        onDelete: 'SET NULL',
    },
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: Sequelize.NOW
    },
    updatedAt: {
        type: DataTypes.DATE,
        defaultValue: Sequelize.NOW,
        onUpdate: Sequelize.NOW
    }
}, {
    tableName: 'apartamentos',
    timestamps: false,
});

Propietario.hasMany(Apartamento, { foreignKey: 'propietario_id', as: 'apartamentos' });
Apartamento.belongsTo(Propietario, { foreignKey: 'propietario_id', as: 'propietario' });

module.exports = Apartamento;
