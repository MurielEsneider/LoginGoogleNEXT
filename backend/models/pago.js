'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Pago extends Model {
    static associate(models) {
      // El pago pertenece a un usuario (quien envía el pago)
      Pago.belongsTo(models.Usuario, { 
        foreignKey: 'usuario_id', 
        as: 'usuario'
      });
      // El pago pertenece a un propietario (quien recibe el pago)
      Pago.belongsTo(models.Propietario, { 
        foreignKey: 'propietario_id', 
        as: 'propietario'
      });
    }
  }

  Pago.init({
    monto: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    fecha: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW
    },
    usuario_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    // Cambiamos propietario_id a STRING para almacenar el UID de Firebase
    propietario_id: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: 'Propietario', // La tabla Propietario
        key: 'uid'            // La columna primaria (UID)
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    }
  }, {
    sequelize,
    modelName: 'Pago',
    freezeTableName: true,
    tableName: 'Pago',
  });

  return Pago;
};
