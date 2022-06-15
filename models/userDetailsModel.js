const Sequelize =require("sequelize");

const db = require("../confiq/db");

module.exports = db.define("users",{
    firstname : {
        type : Sequelize.STRING
    },
    lastname : {
        type : Sequelize.STRING
    },
    email : {
        type : Sequelize.STRING
    },
    profession : {
        type : Sequelize.STRING
    }
})