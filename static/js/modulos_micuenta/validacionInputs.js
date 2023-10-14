/*Esta es la validacion de los inputs que estan en mi cuenta */

function valida() {
// Llamamos a los elementos
let nombre = document.getElementById('nombre');
let correo = document.getElementById('correo');
let usuario = document.getElementById('usuario');
let contrasena = document.getElementById('password');


// Hacemos la funcion para validar los campos 
    if(nombre.value == "") {
        alert('El campo nombre no puede estar vacío');
        nombre.focus();
    }
     else if(correo.value == "") {
        alert('El campo correo no puede estar vacío');
        correo.focus();
    }
    else if(usuario.value == "") {
            alert('El campo usuario no puede estar vacío');
            usuario.focus();
        }
    else if(contrasena.value == "") {
            alert('El campo contraseña no puede estar vacío');
            contrasena.focus();
        } else {
            
        }
}
 





