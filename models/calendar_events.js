'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class calendar_events extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  calendar_events.init({
    calendar_event_id: {
      type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
    },
    description: {
      type:DataTypes.STRING,
      allowNull:false
    },
    todo_id: {
      type:DataTypes.INTEGER,
      allowNull: false    
    },
    todo_name: {
      type:DataTypes.STRING,
      allowNull:false,
      
    },
    todo_complete:{
      type:DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull:false
    }
  }, {
    sequelize,
    modelName: 'calendar_events',
    tableName:'calendar_events',
    timestamps: false
  });
  return calendar_events;
};