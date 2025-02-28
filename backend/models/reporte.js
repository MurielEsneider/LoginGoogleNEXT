'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Reporte extends Model {
    static associate(models) {
      // Un Reporte pertenece a un Usuario
      Reporte.belongsTo(models.Usuario, { 
        foreignKey: 'usuario_id', 
        as: 'usuario'
      });

      // Un Reporte pertenece a un Propietario
      Reporte.belongsTo(models.Propietario, { 
        foreignKey: 'propietario_id', 
        as: 'propietario'
      });
    }
  }

  Reporte.init({
    nombre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    asunto: {
      type: DataTypes.STRING,
      allowNull: false
    },
    mensaje: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    usuario_id: { 
      type: DataTypes.INTEGER,
      allowNull: true, // Puede ser nulo si solo es un reporte de Propietario
      references: {
        model: 'Usuario',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    },
    propietario_id: { 
      type: DataTypes.INTEGER,
      allowNull: true, // Puede ser nulo si solo es un reporte de Usuario
      references: {
        model: 'Propietario',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    }
  }, {
    sequelize,
    modelName: 'Reporte',
    freezeTableName: true,  // Evita que Sequelize pluralice automáticamente
    tableName: 'Reporte'
  });

  return Reporte;
};
