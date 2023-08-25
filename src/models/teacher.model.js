const { DataTypes, UUIDV4 } = require('sequelize');
const { sequelize } = require('../config/fbConfig');

const teacher = sequelize.define('teacher', {
    id: {
        type: DataTypes.UUID,
        defaultValue: UUIDV4(),
        primaryKey: true,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: true,
    }
});

// Synchronize the models with the database
sequelize.sync({ force: false }).then(() => {
    console.log('Database & tables synced');
});

module.exports = { teacher }