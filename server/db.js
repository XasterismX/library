const {Sequelize, DataTypes} = require('sequelize')

const sequlize = new Sequelize(process.env.DB, process.env.DB_USER,process.env.DB_PASSWORD,{
    host:"localhost",
    port: process.env.DB_PORT,
    dialect: process.env.DB_DIALECT
})

module.exports = sequlize