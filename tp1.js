const form = document.querySelector('form');
const card = document.querySelector('.card');
const iframeMapa = document.getElementById('iframe-mapa');
const btnCerrar = document.getElementById('btn-cerrar');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    //obtiene los valores de lat y long que escribe el usuario
    const lat = document.getElementById('lat').value;
    const long = document.getElementById('long').value;

    //URL de la API
    const mapaurl = `https://maps.google.com/maps?q=${lat},${long}&z=15&output=embed`

    iframeMapa.src = mapaurl;
    card.classList.add('expandida');
});
btnCerrar.addEventListener('click', function(){
    card.classList.remove('expandida');
    setTimeout(()=>{
        iframeMapa.src = "";
    }, 600);
});
//lat -24.742076
//long -65.394235