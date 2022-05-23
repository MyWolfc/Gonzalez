window.onload = function (){
   

    document.getElementById("BotonCambiar").addEventListener("click",pedirHeader);

    function pedirHeader() {
        let promesa = new Promise(function(resolve,reject){
            var solicitud = new XMLHttpRequest();
            solicitud.onreadystatechange= function() {
                if(solicitud.readyState == 4 && solicitud.status == 200){
                    resolve(solicitud.responseText);
                }
            }
            solicitud.open("GET","EjerFecth.txt",true)
            solicitud.send();
        })
        promesa.then(value => document.getElementById("DivHeader").innerHTML = value)
    }
    
    document.getElementById("BotonJason").addEventListener("click",AGGJASON);

    function AGGJASON(){
        $.post('getregisto.php',{},function(data){
            console.log("CHECKPOINT");
            console.log(data);
            console.log("CHECKPOINT");
            console.log(data.NombreCom);
            $('#idNombreC').val(data.NombreCom);
            $('#idNombreJ').val(data.NombreDelJuego);
            $('#idRango').val(data.Rango);
            $('#idEdad').val(data.Edad);
            $('#idPais').val(data.Pais);
            
        },'json');
    }

    document.getElementById("BotonJasonFetch").addEventListener("click",AGGJASONFECTH);

    function AGGJASONFECTH(){
        console.log("HOLA");
        //lo recibimpos en una promesa
        fetch('getregisto.php')
        .then( respuesta => respuesta.json())
        .then(function(dato){refrescar(dato)});
        //nos apoyamos en mandar refrescar los campos con el JASON que obtuvimos
    }

   

    function refrescar(data){
            $('#idNombreC').val(data.NombreCom);
            $('#idNombreJ').val(data.NombreDelJuego);
            $('#idRango').val(data.Rango);
            $('#idEdad').val(data.Edad);
            $('#idPais').val(data.Pais);
    }

}