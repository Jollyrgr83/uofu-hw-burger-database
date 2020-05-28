DROP DATABASE IF EXISTS burgers_db;

CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
  id INT NOT NULL AUTO_INCREMENT,
  burger_name VARCHAR(255) NOT NULL,
  devoured BOOLEAN DEFAULT FALSE NOT NULL, 
  PRIMARY KEY (id)
);

INSERT INTO burgers (burger_name, devoured) VALUES 
("The Baconator", FALSE), 
("The Whopper", FALSE), 
("The Intimidator", TRUE);