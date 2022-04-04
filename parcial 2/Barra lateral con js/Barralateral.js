window.onload = function() {
    document.getElementById("btn").addEventListener("click",Alternar);
    function Alternar(){

        document.getElementById("SIDE").classList.toggle("Cerrar");
        document.getElementById("CONT").classList.toggle("contenidos");

    }


}
