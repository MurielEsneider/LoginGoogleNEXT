'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Propiedad', { 
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      titulo: {
        type: Sequelize.STRING,
        allowNull: false
      },
      descripcion: {
        type: Sequelize.TEXT
      },
      direccion: {
        type: Sequelize.STRING,
        allowNull: false
      },
      precio: {
        type: Sequelize.DECIMAL,
        allowNull: false
      },
      imagen: {
        type: Sequelize.STRING
      },
      publicado: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      propietario_id: {
        type: Sequelize.STRING,  // Ahora es STRING para almacenar el UID
        allowNull: false,
        references: {
          model: "Propietario", // Nombre de la tabla Propietario
          key: "uid"            // Clave primaria en Propietario (UID)
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
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
    await queryInterface.dropTable('Propiedad');
  }
};
