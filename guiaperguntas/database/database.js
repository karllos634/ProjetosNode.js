const sequelize = require('sequelize');

const connection = new sequelize('guiaperguntas','root','kiko131313',{
    host: 'localhost',
    dialect: 'mysql',
});

module.exports = connection;