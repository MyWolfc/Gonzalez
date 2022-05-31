window.onload = function (){
    

    

      $('#CerrarAlerta').click(function(){
        $('#Alerta').hide();
      })
    $('#btnInsertar').click(function(){
      let PruebaEPICA = document.getElementById('idID').value;
      console.log(PruebaEPICA);
      let Nombre = document.getElementById('idNombreC').value;
      let NombreJ = document.getElementById('idNombreJ').value;
      let Rango = document.getElementById('idRango').value;
      let Edad = document.getElementById('idEdad').value;
      let Pais = document.getElementById('idPais').value;
      if( Nombre === "" || NombreJ ==="" || Rango === "" || Edad === "" || Pais === "")
      {
        alert("Por favor haga una llene todos los datos ");
      }
      else
      {
      $.post('../PHP/Insertar.php',{NOMBREC:Nombre,NOMBREJ:NombreJ,RANGO:Rango,EDAD:Edad,PAIS:Pais},function(data){
       refrescar(data);  
      },'json');
      }
      Limpiar();
    });

    $('#btnActualizar').click(function(){
        let PruebaEPICA = document.getElementById('idID').value;
        console.log(PruebaEPICA);
        if(PruebaEPICA === "")
        {
          alert("Por favor haga una consulta de la que quiere actualizar");
        }
        else
        {
        let parid = document.getElementById('idID').value;
        let Nombre = document.getElementById('idNombreC').value;
        let NombreJ = document.getElementById('idNombreJ').value;
        let Rango = document.getElementById('idRango').value;
        let Edad = document.getElementById('idEdad').value;
        let Pais = document.getElementById('idPais').value;
        $.post('../PHP/Actualizar.php',{par1:parid,NOMBREC:Nombre,NOMBREJ:NombreJ,RANGO:Rango,EDAD:Edad,PAIS:Pais},function(data){
         refrescar(data);  
        },'json');
        }
        
    });
    
    $('#btnEliminar').click(function(){
      let PruebaEPICA = document.getElementById('idID').value;
      console.log(PruebaEPICA);
      if(PruebaEPICA === "")
      {
        alert("Por favor haga una consulta de la que quiere actualizar");
      }
      else
      {
      let parid = document.getElementById('idID').value;
      let Nombre = document.getElementById('idNombreC').value;
      let NombreJ = document.getElementById('idNombreJ').value;
      let Rango = document.getElementById('idRango').value;
      let Edad = document.getElementById('idEdad').value;
      let Pais = document.getElementById('idPais').value;
      $.post('../PHP/Eliminar.php',{par1:parid,NOMBREC:Nombre,NOMBREJ:NombreJ,RANGO:Rango,EDAD:Edad,PAIS:Pais},function(data){
       refrescar(data);  
      },'json');
      }
    });
   
    $('#btnConsultaBD').click(function() {
    console.log("HOLAAA");
    console.log("Bandeerita");
        let parid = document.getElementById('id_Consulta').value;
       //let parid=prompt("Teclee el ID a consultar");
        //$.post('./PHP/Consulta.php')
        $.post('../PHP/Consulta.php',{par1:parid},function(data){
          refrescar(data);
          },'json');
        $('#Epico').modal('hide');
       console.log("FINAL DE CONSULTA");
       
    });
    function refrescar(data){
            $('#idID').val(data.idID);
            $('#idNombreC').val(data.NombreCom);
            $('#idNombreJ').val(data.NombreDelJuego);
            $('#idRango').val(data.Rango);
            $('#idEdad').val(data.Edad);
            $('#idPais').val(data.Pais);
    }
    function Limpiar(){
      document.getElementById('idID').value = "";
      document.getElementById('idNombreC').value = "";
      document.getElementById('idNombreJ').value = "";
      document.getElementById('idRango').value = "";
      document.getElementById('idEdad').value = "";
      document.getElementById('idPais').value = "";

    }
    
}