/*Esta es la validacion de los inputs que estan en mi cuenta */

function valida() {
    // Llamamos a los elementos
let nombre = document.getElementById('nombre');
let correo = document.getElementById('correo');
let usuario = document.getElementById('usuario');
let contrasena = document.getElementById('password');
let caja = document.getElementById('fieldset');


// Hacemos la funcion para validar los campos 
    if(nombre.value == "") {
        alert('El campo nombre no puede estar vacío');
        // caja.style.border = "1px solid red";
        nombre.focus();
    }
     else if(correo.value == "") {
        alert('El campo correo no puede estar vacío');
        // caja.style.border = "1px solid red";
        correo.focus();
    }
    else if(usuario.value == "") {
            alert('El campo usuario no puede estar vacío');
            // caja.style.border = "1px solid red";
            usuario.focus();
        }
    else if(contrasena.value == "") {
            alert('El campo contraseña no puede estar vacío');
            // caja.style.border = "1px solid red";
            contrasena.focus();
        } else {
            
        }


}


