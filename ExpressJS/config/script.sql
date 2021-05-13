-- Création d'une base de données
CREATE DATABASE IF NOT EXISTS POECNewsDBMySQL ;

USE POECNewsDBMySQL;

DROP TABLE IF EXISTS redacteur ;

CREATE TABLE IF NOT EXISTS redacteur(
	id numeric,
	userlogin varchar(45),
    passwd varchar(45),
    penname varchar(45),
    accredit TINYINT,
    PRIMARY KEY(id)
);