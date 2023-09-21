    // Mostrar contrasenia
        let mostrar = document.getElementById('check');
        let contrasenia = document.getElementById('password')

        function verPassword() {
            if (mostrar.checked == true) {
                contrasenia.type = "text"; 
            }else {
                contrasenia.type = "password";
            }

        }











