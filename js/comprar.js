var modal = document.getElementById("modal");
var boton = document.getElementById("boton-comprar");
var cerrar = document.getElementsByClassName("cerrar")[0];
var contenido = document.getElementsByClassName("contenido")[0];
var cancelar = document.getElementById("cancelar-compra")


boton.addEventListener('click', function() {
    modal.classList.add('active-modal');
    contenido.classList.add('active-modal');

});
    


cerrar.addEventListener('click', function() {
    modal.classList.remove('active-modal');
    contenido.classList.remove('active-modal');
});

window.addEventListener('click', function(event) {
    if(event.target == modal) {
        modal.classList.remove('active-modal');
        contenido.classList.remove('active-modal');
    }
});
