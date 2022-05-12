'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('todo_list', {
      todo_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      todo_name: {
        type:Sequelize.STRING,
        allowNull: false

      },
      description: {
        type: Sequelize.STRING,
        allowNull:false
      },
      calendar_event_id: {
        type: Sequelize.INTEGER,
        allowNull:true
      },
      todo_complete:{
        type:Sequelize.BOOLEAN,
        allowNull:false,
        defaultValue:false
      }

     
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('todo_list');
  }
};