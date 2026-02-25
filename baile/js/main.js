
var botonWalk;
var botonStop;
var botonDance;



var hombre1;




        
document.addEventListener('DOMContentLoaded', async () => {
     botonWalk = document.getElementById('walk');
     botonStop = document.getElementById('stop');
     botonDance = document.getElementById('dance');

     hombre1 = await cargarPersonaje("hombre001", "hombre1");

    if (!hombre1) {
        console.error('No se cargó el personaje');
        return;
    }

    botonWalk.addEventListener('click', () => hombre1.caminar());
    botonStop.addEventListener('click', () => hombre1.stop());
    botonDance.addEventListener('click', () => hombre1.bailar());
    // botonDance.addEventListener('click', () => hombre1.bailar()); // cuando lo implementes
});