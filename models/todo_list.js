'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class todo_list extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      
    }
  }
  todo_list.init({
    todo_id: {
      type:DataTypes.INTEGER,
      primaryKey:true,
      autoIncrement: true
    
    },
    todo_name:{
      type:DataTypes.STRING,
      allowNull:false
    },
    description: {
      type:DataTypes.STRING,
      allowNull:false    
    },
    calendar_event_id: {
      type:DataTypes.INTEGER,
      allowNull: true
        },
    todo_complete:{
      type:DataTypes.BOOLEAN,
      defaultValue:false,
      allowNull:false
    }
  }, {
    sequelize,
    modelName: 'todo_list',
    tableName:'todo_list',
    timestamps: false
    
  });
  return todo_list;
};