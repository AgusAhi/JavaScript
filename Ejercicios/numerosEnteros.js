let num1 = prompt('Inserte el primero número: ');
let num2 = prompt('Inserte el segundo número: ');

parseInt(num1);
parseInt(num2);

// a.

if(num1 > num2) {
    console.log(num1 + ' es mayor que ' + num2);
} else {
    console.log(num2 + ' es mayor que ' + num1);
}

// b.

if (num1 > 0 && num2 > 0) {
    console.log('Ambos son positivos');
} else {
    console.log('Uno de ellos es negativo');
}

// c. 

if (num1 == 0 || num2 == 0) {
    console.log('Alguno de ellos es 0');
} else {
    console.log('Ninguno de ellos es 0');
}