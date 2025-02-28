'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Propiedad extends Model {
    static associate(models) {
      // Solo se define que una Propiedad pertenece a un Propietario
      this.belongsTo(models.Propietario, { 
        foreignKey: 'propietario_id', 
        as: 'propietario' 
      });
    }
  }

  Propiedad.init({
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
    propietario_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Propietario',
        key: 'id'
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
