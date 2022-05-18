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
            solicitud.open("GET","Promesa.txt",true)
            solicitud.send();
        })
        promesa.then(value => document.getElementById("DivHeader").innerHTML = value)
    }
   


}