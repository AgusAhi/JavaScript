let num = parseFloat(prompt('Inserte una nota numérica entre 0 y 10: '));

if (num >= 0 && num < 3) {
    console.log('Insuficiente');
} else if (num >= 3 && num < 6) {
    console.log('Regular');
} else if (num >= 6 && num < 7) {
    console.log('Suficiente');
} else if (num >= 7 && num < 9) {
    console.log('Bien');
} else if (num >= 9 && num <= 10) {
    console.log('Excelente');
} else {
    console.log('Nota fuera de rango');
}
