CREATE DATABASE IF NOT EXISTS investx;

USE investx;

CREATE TABLE usuario (
  id INT(11) NOT NULL AUTO_INCREMENT,
  name VARCHAR(45) DEFAULT NULL,
  correo VARCHAR(45) DEFAULT NULL, 
  PRIMARY KEY(id)
);

DESCRIBE usuario;

INSERT INTO usuario values 
  (1, 'Gabriel', 'gabriel@gmail.com'),
  (2, 'Oscar', 'oscar@gmail.com'),
  (3, 'Maximiliano', 'Maximiliano');

SELECT * FROM usuario;