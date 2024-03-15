let num = prompt('Inserte su edad: ');
parseInt(num);

if (num < 18) {
    console.log('Eres menor de edad');
} else if (num >= 18 && num < 65) {
    console.log('Eres adult@');
} else if (num >= 65) {
    console.log('Eres jubilad@');
} else {
    console.log('Edad no válida');
}
   
    
