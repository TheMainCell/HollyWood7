/*Esta es la validacion de los inputs que estan en mi cuenta */

function valida() {
// Llamamos a los elementos
let nombre = document.getElementById('nombre');
let apellido = document.getElementById('apellido');
let usuario = document.getElementById('usuario');
let contrasena = document.getElementById('password');


// Hacemos la funcion para validar los campos 
    if(nombre.length < 5) {
        alert('El campo nombre no puede estar vacío');
        nombre.focus();
        return false;
    }
     else if(apellido.value == "") {
        alert('El campo apellido no puede estar vacío');
        correo.focus();
        return false;
    }
    else if(usuario.value == "") {
        alert('El campo usuario no puede estar vacío');
        usuario.focus();
        return false;   
        }
    else if(contrasena.value == "") {
        alert('El campo contraseña no puede estar vacío');
        contrasena.focus();
        return false;

        } else {
            
        }
}







