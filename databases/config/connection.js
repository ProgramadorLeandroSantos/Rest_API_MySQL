const Sequelize = require('sequelize');

const connection = new Sequelize('cinepopcorn','root','yourDBpassword',{
    host:'localhost',
    dialect: 'mysql',
    timezone: '-03:00'
});

module.exports = connection;