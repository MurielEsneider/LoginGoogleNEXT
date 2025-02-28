'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Usuario extends Model {
    static associate(models) {
      // Un usuario puede tener muchas notificaciones
      Usuario.hasMany(models.Notificacion, { 
        foreignKey: 'usuario_id', 
        as: 'notificaciones' 
      });
      // Opcional: Un usuario puede tener muchos reportes
      Usuario.hasMany(models.Reporte, { 
        foreignKey: 'usuario_id', 
        as: 'reportes' 
      });
    }
  }

  Usuario.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Usuario',
    freezeTableName: true,  // Evita que Sequelize pluralice automáticamente
    tableName: 'Usuario'
  });

  return Usuario;
};
