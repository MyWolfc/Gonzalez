window.onload = function (){
   

    
   
    $('#btnConsultaBD').click(function() {
    console.log("HOLAAA");
        let parid=prompt("Teclee el ID a consultar");

        $.post('../PHP/getregisto.php',{par1:parid},function(data){
          refrescar(data);
          },'json');
    });
    function refrescar(data){
            $('#idNombreC').val(data.NombreCom);
            $('#idNombreJ').val(data.NombreDelJuego);
            $('#idRango').val(data.Rango);
            $('#idEdad').val(data.Edad);
            $('#idPais').val(data.Pais);
    }
    
}