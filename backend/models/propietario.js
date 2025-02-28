'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Propietario extends Model {
    static associate(models) {
      // Un propietario puede tener muchas propiedades
      Propietario.hasMany(models.Propiedad, { 
        foreignKey: 'propietario_id', 
        as: 'propiedades' 
      });
      // Un propietario puede tener muchos reportes
      Propietario.hasMany(models.Reporte, { 
        foreignKey: 'propietario_id', 
        as: 'reportes'
      });
      // Un propietario puede tener muchas notificaciones
      Propietario.hasMany(models.Notificacion, { 
        foreignKey: 'propietario_id', 
        as: 'notificaciones'
      });
    }
  }

  Propietario.init({
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
    }
  }, {
    sequelize,
    modelName: 'Propietario',
    freezeTableName: true,  // Evita que Sequelize pluralice automáticamente
    tableName: 'Propietario'
  });

  return Propietario;
};
