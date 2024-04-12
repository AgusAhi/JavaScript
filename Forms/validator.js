

function htmlFormValidator() {
    if (document.getElementById('fname').value == "" || document.getElementById('lname').value == "") {
      alert("Por favor, rellene todos los campos");
      return false;
    }
   // Si el script ha llegado a este punto, todas las condiciones
    // se han cumplido, por lo que se devuelve el valor true
    return true;
}
  
  