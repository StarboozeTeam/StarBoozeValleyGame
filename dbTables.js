let mysql = require("mysql");

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "starboozevalleygame"
});


con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
    // If the table characters does not exists, create it
    let sql =
      "CREATE TABLE IF NOT EXISTS employes (id_employe int(5) NOT NULL auto_increment, click_speed int(5), prix_employe int(10), PRIMARY KEY (id_employe))";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Table employes created");
    });

    sql =
      "CREATE TABLE IF NOT EXISTS upgrades (id_upgrade int(5) NOT NULL, upgrade_name varchar(30) NOT NULL, upgrade_price int(10) NOT NULL, upgrade_multiplier float(5), PRIMARY KEY (id_upgrade))";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Table upgrades created");
    });

    sql =
      "CREATE TABLE IF NOT EXISTS game (id_game int(1) NOT NULL auto_increment, score int(10), palier_1 int(10) NOT NULL, palier_2 int(10) NOT NULL, palier_3 int(10) NOT NULL, palier_1_bool boolean DEFAULT false, palier_2_bool boolean DEFAULT false, palier_3_bool boolean DEFAULT false, PRIMARY KEY (id_game))";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Table game created");
    });

    sql =
      "CREATE TABLE IF NOT EXISTS game_employes (id_game_emp int(5) NOT NULL auto_increment, id_game int(1) NOT NULL, id_employe int(5) NOT NULL, nombre_emp int(5), PRIMARY KEY (id_game_emp), FOREIGN KEY (id_game) REFERENCES game(id_game), FOREIGN KEY (id_employe) REFERENCES employes(id_employe))";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Table game_employes created");
    });

    sql =
      "CREATE TABLE IF NOT EXISTS game_upgrades (id_game_upg int(5) NOT NULL auto_increment, id_upgrade int(5) NOT NULL, id_game int(1) NOT NULL, is_active boolean DEFAULT false, PRIMARY KEY (id_game_upg), FOREIGN KEY (id_upgrade) REFERENCES upgrades(id_upgrade), FOREIGN KEY (id_game) REFERENCES game(id_game))";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Table game_upgrades created");
    });
  });
