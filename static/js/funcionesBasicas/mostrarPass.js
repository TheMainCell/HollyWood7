    // Mostrar contrasenia
        let mostrar = document.getElementById('imagen');

        let contrasenia = document.getElementById('password')

        mostrar.addEventListener('click',() => {

            if (contrasenia.type == "password") {
                contrasenia.type = "text";
                mostrar.src = "../../../static/imagenes/hw7/visibility_off.svg"
            } else{
                contrasenia.type = "password";
                mostrar.src = "../../../static/imagenes/hw7/visibility_on.svg"
            }
        })
     




        // function verPassword() {
        //     if (mostrar.checked == true) {
        //         contrasenia.type = "text"; 
        //     }else {
        //         contrasenia.type = "password";
        //     }

        // }











