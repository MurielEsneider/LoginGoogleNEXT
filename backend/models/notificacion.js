'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Notificacion extends Model {
    static associate(models) {
      // Una notificación pertenece a un usuario
      Notificacion.belongsTo(models.Usuario, { 
        foreignKey: 'usuario_id', 
        as: 'usuario'
      });

      // Una notificación pertenece a un propietario
      Notificacion.belongsTo(models.Propietario, { 
        foreignKey: 'propietario_id', 
        as: 'propietario'
      });
    }
  }

  Notificacion.init({
    titulo: {
      type: DataTypes.STRING,
      allowNull: false
    },
    mensaje: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    usuario_id: {
      type: DataTypes.INTEGER,
      allowNull: true, // Permitir nulo si es para un propietario
      references: {
        model: 'Usuario',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    },
    propietario_id: {
      type: DataTypes.INTEGER,
      allowNull: true, // Permitir nulo si es para un usuario
      references: {
        model: 'Propietario',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    },
    leida: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  }, {
    sequelize,
    modelName: 'Notificacion',
    freezeTableName: true,  // Evita que Sequelize pluralice automáticamente
    tableName: 'Notificacion'
  });

  return Notificacion;
};
