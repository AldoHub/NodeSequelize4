const Sequelize = require("sequelize");
const Op = Sequelize.Op;

//database connection
const connection = new Sequelize("sequelize", "root", "" , {
   host: "localhost",
   dialect: "mysql",
   operatorsAliases: Op
});

module.exports = connection;
