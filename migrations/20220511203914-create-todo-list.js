'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('todo_lists', {
      todo_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      description: {
        type: Sequelize.STRING,
        allowNull:false
      },
      calendar_event_id: {
        type: Sequelize.INTEGER,
        allowNull:true
      }
     
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('todo_lists');
  }
};