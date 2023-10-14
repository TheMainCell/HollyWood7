// Modal de eliminar cuenta en MICUENTA

        // Llamamos las variables
        let abrir = document.getElementsByClassName('a-eliminar')[0];
        let confirmar = document.getElementsByClassName('confirmar')[0];


        let cerrar = document.getElementsByClassName('cerrar')[0];
        let aparece = document.getElementsByClassName('contenedor-DP')[0];
        // para que aparezca
        let modal = document.getElementsByClassName('eliminar-cuenta')[0];
        
        //Vamos al mambo este solo abre el primer modal
        abrir.addEventListener('click', e => {
           aparece.style.opacity = "0.37";
           modal.style.display = "block";

        });
        cerrar.addEventListener('click', e => {
            aparece.style.opacity = "1";
            modal.style.display = "none";
        });
