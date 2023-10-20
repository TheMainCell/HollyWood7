var boton_agregar_portada = document.getElementById('boton_agregar_portada'),
    overlay = document.getElementById('overlay'),
    popup =  document.getElementById('popup'),
    cerrar = document.getElementById('cerrar');

boton_agregar_portada.addEventListener('click', function() {
    overlay.classList.add('active');
});

cerrar.addEventListener('click', function() {
    overlay.classList.remove('active');
});