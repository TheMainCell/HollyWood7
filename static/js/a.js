const botonCompra = document.getElementById("boton-comprar");
const nombre = document.getElementById("nombre-sesion");
const password = document.getElementById("password-sesion")


if(nombre !== "Josefinito" && password !== 123456) {
    botonCompra.addEventListener('click', function(evento) {
    location.href="../../inicio-sesion.html"
});
} else {
    alert("gaming");
}   

