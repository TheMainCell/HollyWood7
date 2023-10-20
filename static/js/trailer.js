let modal = document.getElementById("modal-trailer");
let boton = document.getElementById("boton-trailer");
let contenido = document.getElementsByClassName("contenido-trailer")[0];
let cerrar = document.getElementsByClassName("boton-cerrar")[0];

boton.addEventListener('click', function() {
    modal.classList.add('active');
    contenido.classList.add('active');
});

cerrar.addEventListener('click', function() {
    modal.classList.remove('active');
    contenido.classList.remove('active');
});

window.addEventListener('click', function(event) {
    if(event.target == modal) {
        modal.classList.remove('active');
        contenido.classList.remove('active');
    }
});