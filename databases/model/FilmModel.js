const Sequelize = require('sequelize');
const Connection = require('../config/connection');

const FilmModel = Connection.define('films',{
    nome:{
        type: Sequelize.STRING,
        allowNull: false
    },
    genero:{
        type: Sequelize.STRING,
        allowNull: false
    },
    link:{
        type: Sequelize.STRING,
        allowNull: false
    }
});

// FilmModel.sync({force: false});
module.exports = FilmModel;