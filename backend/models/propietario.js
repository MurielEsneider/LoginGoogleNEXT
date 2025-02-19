const { Sequelize, DataTypes } = require('sequelize'); 
const sequelize = require('../config/database');
const Usuario = require('./usuarios');

const Propietario = sequelize.define('Propietario', {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nombre:{
        type: DataTypes.STRING(80),
        allowNull: false,
    },
    apellido:{
        type: DataTypes.STRING(80),
        allowNull: false,
    },
    correo:{
        type: DataTypes.STRING(50),
        unique: true,
        allowNull: false,
    },
    telefono:{
        type: DataTypes.STRING(15),
        allowNull: true,
    },
    admin_id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references:{
            model: Usuario,
            key: 'id',
        },
        onDelete: 'CASCADE',
    },
    createdAt:{
        type: DataTypes.DATE,
        defaultValue: Sequelize.NOW,
    },
    updatedAt:{
        type: DataTypes.DATE,
        defaultValue: Sequelize.NOW,
        onUpdate: Sequelize.NOW
    }
},{
    tableName: 'propietarios',
    timestamps: false,
});

Usuario.hasMany(Propietario, {foreignKey: 'admin_id', as: 'propietarios'});
Propietario.belongsTo(Usuario, {foreignKey: 'admin_id', as: 'admin'});

module.exports = Propietario;