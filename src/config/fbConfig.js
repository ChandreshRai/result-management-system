require('dotenv').config();

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.DB, process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_HOST,
  dialect:process.env.DB_DIALECT, // This is the dialect for PostgreSQL
  logging: false,
  dialectOptions: {
    timezone: 'Asia/Kolkata',
  },
});

module.exports={sequelize}