const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const ToDo = sequelize.define('toDo', {
    task: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    isCompleted: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    // userId
});

module.exports = ToDo;