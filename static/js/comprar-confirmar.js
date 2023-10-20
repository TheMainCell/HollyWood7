// history back
var cancelar = document.getElementById('cancelar-compra');
cancelar.addEventListener('click', function() {
    history.back();
} );

// modal

var modal = document.getElementById("modal");
var boton = document.getElementById("boton-comprar");
var cerrar = document.getElementsByClassName("cerrar")[0];
var contenido = document.getElementsByClassName("contenido")[0];
var cancelar = document.getElementById("cancelar-compra")

function molda_usar(){

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

}

// validacion
var tarjeta_credito = document.getElementById('tarjeta-credito'),
    codigo_credito = document.getElementById('codigo-credito')
    dia_disponible= document.getElementById('dia-disponible')
    idioma_disponible = document.getElementById('idioma-disponible');

function verificar_dato(){
    if(dia_disponible.value == "") {
        alert("Llenar el campo de fecha")
        return false;
    } else if(idioma_disponible.value == "") {
        alert("Llenar el campo de idioma")
        return false;
    } else if(tarjeta_credito.value == "") {
        alert("Llenar el campo de tarjeta de credito")
        return false;
    } else if(codigo_credito.value == "") {
        alert("Llenar el campo de codigo de seguridad")
        return false;
    } else {
        molda_usar();
        return True;
    }
}