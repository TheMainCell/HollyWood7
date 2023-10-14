// Modal pora eliminar mi cuenta de mi cuenta
    

        let abre = Array.from(document.getElementsByClassName('escribir_datos'));
        let edita = document.getElementsByClassName('confirmar_cambios')[0];
        let mensaje = document.getElementsByClassName('mensajeUser')[0];
        let modalSalir = document.getElementsByClassName('contenedor-datos-personales')[0];
        let eliminar = document.getElementsByClassName('a-eliminar')[0];
        let cancelar = document.getElementsByClassName('cancelarEdicion')[0];

        abre.map(abra => {
            abra.addEventListener('click', () => {
                if (!edita.classList.contains('active')){
                    edita.classList.add('active')
                    mensaje.innerHTML = "Editando credenciales..."
                    mensaje.style.color = "yellow"
                    cancelar.style.display = "block"
                    eliminar.style.display = "none"
                } 
        })})
        cancelar.addEventListener('click',() =>{
            edita.classList.remove('active')
            mensaje.innerHTML = "Haz clic en cualquiera de los campos para empezar a editar"
            mensaje.style.color = "white"
            cancelar.style.display = "none"
            eliminar.style.display = "block"
        })
        