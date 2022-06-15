const Sequelize = require("sequelize");

module.exports = new Sequelize('mayur','root','root',{
    host : 'localhost',
    dialect : 'mysql'
})