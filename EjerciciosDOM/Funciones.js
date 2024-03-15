function cambiarTitulo() {
    let h1 = document.getElementById('title');
    h1.textContent = 'Hola Mundo 2';
}

function cambiarColor() {
    let h1 = document.getElementById('title');
    h1.style.color = '#cb3234';
}

// por hacer
function añadirTexto() {
    let div = document.getElementById('contenedor');
    div.innerHTML = "<p>este es el texto de la div acabada de crear</p>";
}