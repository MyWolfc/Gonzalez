window.onload = function (){
   

      document.getElementById("BotonCambiar").addEventListener("click",pedirHeader);

      function pedirHeader() {
          var solicitud = new XMLHttpRequest();

          solicitud.onreadystatechange= function() {
              if(solicitud.readyState == 4 && solicitud.status == 200){
                  document.getElementById("DivHeader").innerHTML = solicitud.responseText;
              }
          }
          solicitud.open("GET","PracticaAJAX.txt",true)
          solicitud.send();
      }



}