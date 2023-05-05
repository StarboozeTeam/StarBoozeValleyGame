const mysql = require("mysql")

let conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "dbStarboozeValley"
})

conn.connect(function (err) {
    if (err) throw err;
    console.log("Connected!")

    let sql = "CREATE TABLE IF NOT EXISTS game (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), multiplier FLOAT)"
    conn.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Table created");
    })
})