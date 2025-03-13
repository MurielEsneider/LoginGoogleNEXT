'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('PublicacionGuardada', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      usuario_id: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      // Cambiamos la definición de propietario_id para que sea STRING
      // y haga referencia a la columna "uid" de la tabla Propietario
      propietario_id: {
        type: Sequelize.STRING,
        allowNull: true,
        references: {
          model: 'Propietario', // Nombre de la tabla (tal como se definió en la migración de Propietario)
          key: 'uid'            // Ahora referencia la columna "uid"
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('PublicacionGuardada');
  }
};
