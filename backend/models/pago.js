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
    propietario_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Pago',
    freezeTableName: true,  // Evita que Sequelize pluralice automáticamente
    tableName: 'Pago',
  });

  return Pago;
};
