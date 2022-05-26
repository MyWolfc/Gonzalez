window.onload = function (){
    

   

      $('#CerrarAlerta').click(function(){
        $('#Alerta').hide();
      })
    $('#btnInsertar').click(function(){
        let Nombre = document.getElementById('idNombreC').value;
        let NombreJ = document.getElementById('idNombreJ').value;
        let Rango = document.getElementById('idRango').value;
        let Edad = document.getElementById('idEdad').value;
        let Pais = document.getElementById('idPais').value;
        $.post('../PHP/Insertar.php',{NOMBREC:Nombre,NOMBREJ:NombreJ,RANGO:Rango,EDAD:Edad,PAIS:Pais});
        $('#Alerta').show();
    });

    $('#btnActualizar').click(function(){
        let parid = prompt("Teclee el ID que desee actualizar con informacion que lleno");
        let Nombre = document.getElementById('idNombreC').value;
        let NombreJ = document.getElementById('idNombreJ').value;
        let Rango = document.getElementById('idRango').value;
        let Edad = document.getElementById('idEdad').value;
        let Pais = document.getElementById('idPais').value;
        $.post('../PHP/Actualizar.php',{par1:parid,NOMBREC:Nombre,NOMBREJ:NombreJ,RANGO:Rango,EDAD:Edad,PAIS:Pais},function(data){
         refrescar(data);  
        },'json');
        
    });
    
    $('#btnEliminar').click(function(){
        let parid=prompt("Teclee el ID a Eliminar");

        $.post('../PHP/Eliminar.php',{par1:parid});
       //$('#AlertaOWO').val(parid);
    });
   
    $('#btnConsultaBD').click(function() {
    console.log("HOLAAA");
        let parid=prompt("Teclee el ID a consultar");
        //$.post('./PHP/Consulta.php')
        $.post('../PHP/Consulta.php',{par1:parid},function(data){
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