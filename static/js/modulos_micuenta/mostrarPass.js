    // ~ Mostrar contrasenia

    // ^ Estoy muy orgulloso de este codigo, lo hice totalmente yo al igual que los otros, pero este en particular me gusta mas, aunque parezca sencillo, es un poco tedioso pero lo logre

        // ^ Importamos los ID de cada elemento que vamos a usar, en este caso la IMG del HTML y el input con el type de password

        // ///////////////////////////////////////////////////////////////////////////////////////////////

        let mostrar = document.getElementById('imagen');
        let contrasenia = document.getElementById('password')

        /////////////////////////////////////////////////////////////////////////////////////////////////


        // ^ Creamos una funcion con evento click y mediante una validacion cambiamos el valor del input y el SRC de la imagen cambiandola por otra:

        // ///////////////////////////////////////////////////////////////////////////////////////////////
        mostrar.addEventListener('click',() => {
            if (contrasenia.type == "password") {
                contrasenia.type = "text";
                mostrar.src = "../../../static/imagenes/hw7/visibility_off.svg"
            } else{
                contrasenia.type = "password";
                mostrar.src = "../../../static/imagenes/hw7/visibility_on.svg"
            }
        })
        // ///////////////////////////////////////////////////////////////////////////////////////////////
// TODO: Este es el codigo completo, siganme los que no me siguen en @cristian_ang IG
     











