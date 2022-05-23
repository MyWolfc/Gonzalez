Create schema N19100190;

CREATE TABLE `n19100190`.`Jugadores` (
  `idID` INT NOT NULL AUTO_INCREMENT,
  `NombreCom` VARCHAR(45) NOT NULL,
  `NombreDelJuego` VARCHAR(45) NOT NULL,
  `Rango` VARCHAR(45) NOT NULL,
  `Edad` INT NOT NULL,
  `Pais` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idID`));


insert into n19100190.Jugadores values(1,'Juan Eduardo Gonzalez Leyva','VALORANT','ORO',21,'Mexico');
insert into n19100190.Jugadores values(2,'Citlali Nila Gutierres','Candy Crush','PLATINO',20,'Mexico');
insert into n19100190.Jugadores values(3,'David Castillo','Overwacth','PLANTA',21,'Mexico');
insert into n19100190.Jugadores values(4,'Eduardo Perez','VALORANT','BRONCE',20,'Mexico');
insert into n19100190.Jugadores values(5,'Jose Ortega','VALORANT','PLATINO',21,'Mexico');
