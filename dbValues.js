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
    // If it works, insert 4 new rows inside the characters table

    sql = "INSERT INTO game (id_game, score, palier_1, palier_2, palier_3, palier_1_bool, palier_2_bool, palier_3_bool) VALUES ?";
    let values = [
      ["", "0", "10", "20", "200", "", "", ""]
    ];
    con.query(sql, [values], function (err, result) {
      if (err) throw err;
      console.log("Number of records inserted: " + result.affectedRows);
    });

    sql = "INSERT INTO employes (id_employe, click_speed, prix_employe) VALUES ?";
    values = [
      ["", "1", "10"]
    ];
    con.query(sql, [values], function (err, result) {
      if (err) throw err;
      console.log("Number of records inserted: " + result.affectedRows);
    });
    
    sql = "INSERT INTO upgrades (id_upgrade, upgrade_name,upgrade_price, upgrade_multiplier) VALUES ?";
    values = [
      ["0", "alambic niv 1", "20", "1.2"],
      ["1", "alambic niv 2", "40", "1.5"],
      ["2", "alambic niv 3", "70", "2,0"]
    ];
    con.query(sql, [values], function (err, result) {
      if (err) throw err;
      console.log("Number of records inserted: " + result.affectedRows);
    });
    
    sql = "INSERT INTO game_employes (id_game_emp, id_game, id_employe, nombre_emp) VALUES ?";
    values = [
      ["", "", "", ""]
    ];
    con.query(sql, [values], function (err, result) {
      if (err) throw err;
      console.log("Number of records inserted: " + result.affectedRows);
    });
    
    sql = "INSERT INTO game_upgrades (id_game_upg, id_upgrade, id_game, is_active) VALUES ?";
    values = [
      ["", "", "", ""]
    ];
    con.query(sql, [values], function (err, result) {
      if (err) throw err;
      console.log("Number of records inserted: " + result.affectedRows);
    });



  });
