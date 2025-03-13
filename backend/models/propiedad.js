"use strict";
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Propiedad extends Model {
    static associate(models) {
      // Relación: una propiedad pertenece a un propietario
      this.belongsTo(models.Propietario, { 
        foreignKey: 'propietario_id', 
        as: 'propietario' 
      });
    }
  }

  Propiedad.init( {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    titulo: {
      type: DataTypes.STRING,
      allowNull: false
    },
    descripcion: DataTypes.TEXT,
    direccion: {
      type: DataTypes.STRING,
      allowNull: false
    },
    precio: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    imagen: DataTypes.STRING,
    publicado: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    // Cambiamos el tipo a STRING para almacenar el UID de Firebase del propietario
    propietario_id: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: 'Propietario', // Nombre de la tabla en la base de datos
        key: 'uid'            // Columna a la que se hace referencia (UID de Firebase)
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    }
  }, {
    sequelize,
    modelName: 'Propiedad',
    freezeTableName: true,
    tableName: 'Propiedad'
  });

  return Propiedad;
};
