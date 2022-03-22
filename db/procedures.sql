USE cels;

DELIMITER $$
USE `cels`$$

CREATE PROCEDURE `user` (
  IN _id INT,
  IN _nombre VARCHAR(75),
  IN _correo VARCHAR(45),
  IN _telefono VARCHAR(15),
  IN _usuario VARCHAR(45)
)
BEGIN 
  IF _id = 0 THEN
  
   INSERT INTO `cels`.`usuarios` (`nombre`, `correo`, `telefono`, `usuario`) 
   VALUES (_nombre, _correo, _telefono, _usuario);

    SET _id = LAST_INSERT_ID();
  ELSE
    SELECT * from usuarios;
  END IF;

  SELECT _id AS 'id';
END
