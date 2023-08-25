const { DataTypes, UUIDV4 } = require('sequelize');
const { sequelize } = require('../config/fbConfig');

const student = sequelize.define('student', {
    id: {
        type: DataTypes.UUID,
        defaultValue: UUIDV4(),
        primaryKey: true,
        allowNull: false,
    },
    rollNo: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    dob: {
        type: DataTypes.DATEONLY,
        allowNull: true,
    },
    score: {
        type: DataTypes.INTEGER,
        allowNull: true,
        unique: false
    },

    edittedBy: {
        type: DataTypes.STRING,
        allowNull:true
    },
    createdBy: {
        type: DataTypes.STRING
    },
    userStatus: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
    },
});

// Synchronize the models with the database
sequelize.sync({ force: false }).then(() => {
    console.log('Database & student tables synced');
});

module.exports = { student }