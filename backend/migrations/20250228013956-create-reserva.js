'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Reserva', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      usuario_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Usuario', // Asegúrate de que la tabla Usuarios exista
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      propiedad_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Propiedad', // Asegúrate de que la tabla Propiedades exista
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      propietario_id: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
          model: "Propietario", // Nombre de la tabla
          key: "uid"            // Clave primaria del propietario
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
      },
      pago_id: {
        type: Sequelize.INTEGER,
        allowNull: true, // Puede ser nulo si el pago se realiza después o se asocia más adelante
        references: {
          model: 'Pago', // Asegúrate de que la tabla Pagos exista
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      },
      fecha_inicio: {
        type: Sequelize.DATE,
        allowNull: false
      },
      fecha_fin: {
        type: Sequelize.DATE,
        allowNull: false
      },
      estado: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: 'pendiente' // ejemplo: pendiente, confirmada, cancelada, etc.
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
    await queryInterface.dropTable('Reserva');
  }
};
