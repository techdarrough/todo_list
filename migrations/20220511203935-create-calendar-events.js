'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('calendar_events', {
      calendar_event_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      description: {
        type: Sequelize.STRING,
        allowNull: false
      },
      todo_id: {
        type: Sequelize.INTEGER,
        allowNull:true
      },
      todo_name: {
        type:Sequelize.STRING,
        allowNull:false
      },
      todo_complete: {
        type:Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull:false
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('calendar_events');
  }
};