'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class PublicacionGuardada extends Model {
    static associate(models) {
      // Una publicación guardada pertenece a un Usuario (opcional)
      PublicacionGuardada.belongsTo(models.Usuario, {
        foreignKey: 'usuario_id',
        as: 'usuario'
      });
      // Una publicación guardada pertenece a un Propietario (opcional)
      PublicacionGuardada.belongsTo(models.Propietario, {
        foreignKey: 'propietario_id',
        as: 'propietario'
      });
    }
  }

  PublicacionGuardada.init({
    usuario_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    // Actualizamos la columna para que sea de tipo STRING
    // Esto permitirá almacenar el UID de Firebase que es un string
    propietario_id: {
      type: DataTypes.STRING,
      allowNull: true
    }
    // Puedes agregar otros campos si es necesario, por ejemplo: publicacion_id, fecha_guardado, etc.
  }, {
    sequelize,
    modelName: 'PublicacionGuardada',
    freezeTableName: true,  // Evita que Sequelize pluralice automáticamente
    tableName: 'PublicacionGuardada'
  });

  return PublicacionGuardada;
};
