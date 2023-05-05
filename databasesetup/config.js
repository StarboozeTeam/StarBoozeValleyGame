
const mysql = require("mysql")

const config = { 
    db: {
        host: "localhost",
        user: "root",
        password: "",
        database: "dbStarboozeValley"
    },
    listPerPage: 10
}; 

module.exports = config;