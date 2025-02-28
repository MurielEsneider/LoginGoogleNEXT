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
        allowNull: true,  // Permite nulo si el guardado lo hace un arrendatario
        references: {
          model: 'Usuario', // La tabla de Usuarios debe existir
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      arrendatario_id: {
        type: Sequelize.INTEGER,
        allowNull: true,  // Permite nulo si el guardado lo hace un usuario
        references: {
          model: 'Propietario', // La tabla de Arrendatarios debe existir
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      // (Opcional) Si deseas guardar algún dato extra relacionado a la publicación guardada, agrégalo aquí
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
