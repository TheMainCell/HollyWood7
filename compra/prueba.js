var modal = document.getElementById("modal");
var boton = document.getElementById("boton-comprar");
var cerrar = document.getElementsByClassName("cerrar")[0];
var contenido = document.getElementsByClassName("contenido")[0];


boton.onclick = function() {
    modal.style.display = "block";
    contenido.style.transform = "translate(0)";
    modall.style.transition = "ease-in-out 0.2s";
};

cerrar.onclick = function() {
    modal.style.display = "none"
};

window.onclick = function(event) {
    if(event.target == modal) {
        modal.style.display = "none"
    }
}