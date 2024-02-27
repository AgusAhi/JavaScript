// Imprimir por pantalla

    console.log('Hola mundo' + miVariable);

 // Variables

    /*El tipado en JS es débil, osea no es necesario especificar
    el tipo de dato. Así que no es recomendable cambiar el contenido de la variable
    una vez asignada.*/

    let miVariable = 100;
    console.log(miVariable);

    /* Esto no es recomendable */
    miVariable = 'Ya no es un número';
    console.log(miVariable);

// Tipos de Variables

    /* Variable de tipo cadena de texto */
    let nombre = 'Pablo';

    /* Variable de tipo numerico */
    let numeroEntero = 9;
    let numeroDecimal = 9.5;
    let puntuacion = 99;

    /* Variable de tipo boolean */
    let tieneMascota = true;

    /* Variable indefinida */
    let unaVariable;

    /* Variable de tipo nulo */
    let nulo = null;
    console.log(nombre);
    console.log(puntuacion);
    console.log(tieneMascota);
    console.log(unaVariable);
    console.log(nulo);

    /* Declaración con var */
    var x = 1

    var texto = 'Perro';
    console.log(texto);
    {
        var texto = 'Gato';
        console.log(texto);
    }
    console.log(texto);

    /* El var se actualiza */

    Perro
    Gato
    Gato

    /* Con let no */

    Perro
    Gato
    Perro

// Constantes

    const numeroPi = 3.1416;
    console.log(numeroPi);

// Operadores aritméticos
    let a, b, c, d;
    let resultado;

    a = 10;
    b = 5;
    c = 2;
    d = 8;

    /* Operador de suma */
    resultado = a + b;
    console.log(resultado);

    /* Operador de resta */
    resultado = a - b;
    console.log(resultado);
    a = a + b;
    console.log('ahora a vale: ');
    console.log(a);

    /* Operador de multiplicacion */
    resultado = a * b;
    console.log(resultado);

    /* Operador de division */
    resultado = c / b;
    console.log(resultado);
    
    /* Operador de modulo. Devuelve el resto de dividir el dividendo por el divisor */
    resultado = d%c;
    console.log(resultado);
    resultado = d%a;
    console.log(resultado);



