const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Propietario = require('./propietarios');

const Pago = sequelize.define('Pago', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    monto: {
        type: DataTypes.DECIMAL(10,2),
        allowNull: false,
    },
    estado: {
        type: DataTypes.ENUM('Pendiente', 'Pagado'),
        defaultValue: 'Pendiente',
        allowNull: false,
    },
    propietario_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Propietario,
            key: 'id',
        },
        onDelete: 'CASCADE',
    },
    fecha_pago: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: Sequelize.NOW,
        allowNull: false
    },
    updatedAt: {
        type: DataTypes.DATE,
        defaultValue: Sequelize.NOW,
        allowNull: false
    }
}, {
    tableName: 'pagos',
    timestamps: false,
});

Propietario.hasMany(Pago, { foreignKey: 'propietario_id', as: 'pagos' });
Pago.belongsTo(Propietario, { foreignKey: 'propietario_id', as: 'propietario' });

module.exports = Pago;