// Imagen predeterminada

        const defaultFile = 'https://w7.pngwing.com/pngs/177/551/png-transparent-user-interface-design-computer-icons-default-stephen-salazar-graphy-user-interface-design-computer-wallpaper-sphere-thumbnail.png';
        const file = document.getElementById('foto');
        const img = document.getElementById('img');

        
        // Al parecer aqui es donde hare que esta pagina funcione
        file.addEventListener('change', e => {
            if(e.target.files[0] ) {
                const reader = new FileReader();
                reader.onload = function(e){
                    img.src = e.target.result;
                }
                reader.readAsDataURL(e.target.files[0])
            } else {
               img.src = defaultFile;
            }
        });













        // Prueba de lo que son las notificaciones

        