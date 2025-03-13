'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Reserva extends Model {
    static associate(models) {
      // Una reserva pertenece a un usuario (quien reserva)
      Reserva.belongsTo(models.Usuario, { 
        foreignKey: 'usuario_id', 
        as: 'usuario'
      });
      // Una reserva pertenece a una propiedad
      Reserva.belongsTo(models.Propiedad, { 
        foreignKey: 'propiedad_id', 
        as: 'propiedad'
      });
      // Una reserva pertenece a un propietario (quien es dueño de la propiedad)
      Reserva.belongsTo(models.Propietario, { 
        foreignKey: 'propietario_id', 
        as: 'propietario'
      });
      // Una reserva puede estar asociada a un pago (opcional)
      Reserva.belongsTo(models.Pago, { 
        foreignKey: 'pago_id', 
        as: 'pago'
      });
    }
  }

  Reserva.init({
    usuario_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    propiedad_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    // Cambiamos el tipo a STRING para almacenar el UID de Propietario
    propietario_id: {
      type: DataTypes.STRING,
      allowNull: false
    },
    pago_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    fecha_inicio: {
      type: DataTypes.DATE,
      allowNull: false
    },
    fecha_fin: {
      type: DataTypes.DATE,
      allowNull: false
    },
    estado: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'pendiente'
    }
  }, {
    sequelize,
    modelName: 'Reserva',
    freezeTableName: true,  // Evita que Sequelize pluralice automáticamente
    tableName: 'Reserva'
  });

  return Reserva;
};
