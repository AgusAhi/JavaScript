

function mensajeClick(event) {
    console.log('Hemos clickado sobre el elemento');
}

function cambiarTitulo() {
    let h1 = document.getElementById('titulo');
    h1.textContent = 'Nuevo título';
}
function anyadirTexto() {
    let div = document.getElementById('contenedor');
    div.innerHTML = "<p>Añadimos contenido nuevo dentro de la sección de contenido.</p>";
}
function cambiarColor() {
    let h1 = document.getElementById('titulo');
    h1.style.color = '#2356f1';
}