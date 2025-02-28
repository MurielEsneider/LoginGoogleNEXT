'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Pago', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      monto: {
        type: Sequelize.DECIMAL,
        allowNull: false
      },
      fecha: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW
      },
      usuario_id: { // El usuario que envía el pago
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Usuario', // Asegúrate de que la tabla "Usuarios" exista
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      arrendatario_id: { // El arrendatario que recibe el pago
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Propietario', // Asegúrate de que la tabla "Arrendatarios" exista
          key: 'id'
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
    await queryInterface.dropTable('Pago');
  }
};
