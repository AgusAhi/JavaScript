function cambiarTitulo() {
    let h1 = document.getElementById('title');
    h1.textContent = 'Hola Mundo 2';
}

function cambiarColor() {
    let h1 = document.getElementById('title');
    h1.style.color = '#cb3234';
}

function añadirTexto() {
    let div = document.getElementById('contenedor');
    div.innerHTML = "<p>Este es el texto de la div acabada de crear</p>";
}

function eliminarDiv() {
    let div = document.getElementById('contenedor');
    div.remove();
}

function ponerPie(fig){
	var pie = fig.getElementsByTagName('figcaption')[0];
	var img = fig.getElementsByTagName('img')[0];

	if (pie.innerText ==''){
   	    pie.innerText = img.alt;
   	}
	else{
   	    pie.innerText = '';
 	}
}

function fuentesImg(){
    var listaImgs = document.getElementsByTagName('img');
    var salida = document.getElementById('fuentes');
    var ind;
    for(ind = 0; ind <listaImgs.length; ind++){
        salida.innerHTML += listaImgs[ind].src+"<br>";
       }
    }
  

