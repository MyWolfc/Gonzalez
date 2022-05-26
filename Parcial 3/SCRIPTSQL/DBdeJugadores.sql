Create schema N19100190;

CREATE TABLE `n19100190`.`Jugadores` (
  `idID` INT NOT NULL AUTO_INCREMENT,
  `NombreCom` VARCHAR(45) NOT NULL,
  `NombreDelJuego` VARCHAR(45) NOT NULL,
  `Rango` VARCHAR(45) NOT NULL,
  `Edad` INT NOT NULL,
  `Pais` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idID`));


insert into n19100190.Jugadores (NombreCom,NombreDelJuego,Rango,Edad,Pais) values('Juan Eduardo Gonzalez Leyva','VALORANT','ORO',21,'Mexico');
insert into n19100190.Jugadores (NombreCom,NombreDelJuego,Rango,Edad,Pais) values('Citlali Nila Gutierres','Candy Crush','PLATINO',20,'Mexico');
insert into n19100190.Jugadores (NombreCom,NombreDelJuego,Rango,Edad,Pais) values('David Castillo','Overwacth','PLANTA',21,'Mexico');
insert into n19100190.Jugadores (NombreCom,NombreDelJuego,Rango,Edad,Pais) values('Eduardo Perez','VALORANT','BRONCE',20,'Mexico');
insert into n19100190.Jugadores (NombreCom,NombreDelJuego,Rango,Edad,Pais) values('Jose Ortega','VALORANT','PLATINO',21,'Mexico');
