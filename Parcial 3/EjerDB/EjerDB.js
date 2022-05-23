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
            console.log(data);
            $('#validacionEncargadoAce').val(data.validacionEncargadoAce);
            $('#validacionNumTrabaAce').val(data.validacionNumTrabaAce);
            $('#validacionCostosAce').val(data.validacionCostosAce);
            $('#validacionPzaEnde').val(data.validacionPzaEnde)
            $('#validacionDePerdida').val(data.validacionDePerdida);
            
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
          $('#validacionEncargadoAce').val(data.validacionEncargadoAce);
          $('#validacionNumTrabaAce').val(data.validacionNumTrabaAce);
          $('#validacionCostosAce').val(data.validacionCostosAce);
          $('#validacionPzaEnde').val(data.validacionPzaEnde)
          $('#validacionDePerdida').val(data.validacionDePerdida); 
    }

}