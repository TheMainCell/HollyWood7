// Modal de mensaje para guardar la cuenta
let abrir_mensaje = document.getElementsByClassName('aceptar')
        let modal_mensaje = document.getElementsByClassName('mensaje-de-guardar-cuenta')

        abrir_mensaje.addEventListener('click', () => {
            modal_mensaje.classList.add('active')
        })
        