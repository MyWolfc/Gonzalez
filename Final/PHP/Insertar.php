<?php



$NombreC = $_POST['NOMBREC'];
$NombreJ = $_POST['NOMBREJ'];
$Rango = $_POST['RANGO'];
$Edad = $_POST['EDAD'];
$Pais = $_POST['PAIS'];
$hostname = 'localhost';
$database = 'n19100190';
$username = 'maneskin';
$passwword = 'Default123';


try{
    $con = new PDO("mysql:host=$hostname;dbname=$database",$username,$passwword);
} catch(PDOException $e){
    echo $e->getMessage();
    exit();
}

//$con->setAttribute(PDO::ATT_ERRMODE,PDO::ERRMODE_EXCEPTION);

try{
    
    $consultaSql = "insert into n19100190.jugadores (NombreCom,NombreDelJuego,Rango,Edad,Pais) values('$NombreC','$NombreJ','$Rango',$Edad,'$Pais');
    " ;
    $consulta = $con -> prepare($consultaSql);
    $consulta -> execute();
    $resultado = $consulta->fetch(PDO::FETCH_ASSOC);
    $consulta->closeCursor();

}catch(PDOException $e){
    echo "Error d la consulta";
    echo $e->getMessage();

}

$resultadoJSON = json_encode($resultado);
echo $resultadoJSON;
?>