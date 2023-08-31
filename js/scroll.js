const accion = document.getElementsByClassName("accion");
const comedia = document.getElementById("comedia");
const heroe = document.getElementById("heroe");
const animacion = document.getElementById("animacion");


const izquierda = document.getElementsByClassName("scroll-atras");
const derecha = document.getElementsByClassName("scroll-adelante");

derecha.addEventListener("click", ()=> {
    contenido.scrollLeft += 250;
});