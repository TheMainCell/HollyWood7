// Modal pora eliminar mi cuenta de mi cuenta
    

        let abre = Array.from(document.getElementsByClassName('escribir_datos'));
        let edita = document.getElementsByClassName('confirmar_cambios')[0];

        abre.map(abra => {
            abra.addEventListener('click', () => {
            edita.classList.add('active')
        })})