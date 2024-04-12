

function validator() {

    // Ejercicio 1
    
    if (document.getElementById('nombre').value == "") {
      alert("Por favor, rellene el campo nombre correctamente");
      return false;
    }

    // Ejercicio 2

    if (!/^\w+([.-_+]?\w+)*@[\w-]+(\.[\w-]+)*(\.\w{2,10})+$/.test(document.getElementById('email').value)) {
      alert("Por favor, rellene el campo email correctamente");
      return false;
    }

    // Ejercicio 3

    opciones = document.getElementsByName("fav_language");
 
    var seleccionado = false;
    for (var i = 0; i < opciones.length; i++) {
      if (opciones[i].checked) {
        seleccionado = true;
        break;
      }
    }
    if (!seleccionado) {
      alert("Por favor, indique el curso al que quieres inscribirte");
      return false;
    }
    return true;


  

}
  

