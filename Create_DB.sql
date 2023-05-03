CREATE DATABASE starboozevalleygame;

USE disconaute;

CREATE TABLE employes (
    id_employe int(5) NOT NULL auto_increment,
    click_speed int(5),
    prix_employe int(10), 
    PRIMARY KEY (id_employe),
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE upgrades (
    id_upgrade int(5) NOT NULL,
    upgrade_name varchar(30) NOT NULL,
    upgrade_price int(10) NOT NULL,
    upgrade_multiplier int(5),
    PRIMARY KEY (id_user)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE game (
    id_game int(1) NOT NULL,
    score int(10),
    palier_1 int(10) NOT NULL,
    palier_2 int(10) NOT NULL,
    palier_3 int(10) NOT NULL,
    palier_1_bool boolean DEFAULT false,
    palier_2_bool boolean DEFAULT false,
    palier_3_bool boolean DEFAULT false,
    PRIMARY KEY (id_game)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE game_emp (
    id_game_emp int(5) NOT NULL auto_increment,
    id_game int(1) NOT NULL,
    id_employe int(5) NOT NULL,
    nombre_emp int(5),
    FOREIGN KEY (id_game) REFERENCES game(id_game)
    FOREIGN KEY (id_employe) REFERENCES employes(id_employe)
)



    FOREIGN KEY (id_lui) REFERENCES users(id_user),
