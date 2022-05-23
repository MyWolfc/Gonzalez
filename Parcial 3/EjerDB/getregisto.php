<?php

$id=2;

$hostname = 'localhost';
$database = 'n19100190';
$username = 'maneskin';
$passwword = 'Default123';


try{
    $con = new PDO("mysql:host=$hostname;dbname=$database",$username,$passwword);
    echo "BANDRA";
} catch(PDOException $e){
    echo "ERROR NO SE CONECTO";
    echo $e->getMessage();
    exit();
}

//$con->setAttribute(PDO::ATT_ERRMODE,PDO::ERRMODE_EXCEPTION);

try{
    echo "HOLAAA";
    $consultaSql = "Select id,NombreCom,Pais from Jugadores where id=" .$id;
    $consulta = $con -> prepare($consultaSql);
    $consulta -> execute();
    $resultado = $consulta->fetch(PDO::FETCH_ASSOC);
    echo "PASO LA CONSULTA";
    $consulta->closeCursor();

}catch(PDOException $e){
    echo "Error d la consulta";
    echo $e->getMessage();

}
echo json_encode($resultado);
?>