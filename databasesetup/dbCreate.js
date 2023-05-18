const mysql = require("mysql")

let conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: ""
})

conn.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
    conn.query("CREATE DATABASE IF NOT EXISTS dbStarboozeValley", function (err, result) {
        if (err) throw err;
        console.log("Database created");
    })
})