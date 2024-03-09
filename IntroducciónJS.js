// Imprimir por pantalla

    let miVariable = 100;
    console.log('Hola mundo' + miVariable);

 // Variables

    /*El tipado en JS es débil, osea no es necesario especificar
    el tipo de dato. Así que no es recomendable cambiar el contenido de la variable
    una vez asignada.*/

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

    /* El var se actualiza 

    Perro
    Gato
    Gato

    */

    /* Con let no 

    Perro
    Gato
    Perro

    */

// Constantes

    const numeroPi = 3.1416;
    console.log(numeroPi);  

// Operadores aritmético s
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

    /* Esto existe */ 

    x++;
    x += 1;
    
// Prompts

    let numTel = prompt('Numero de Teléfono: ');
    console.log('Su número de teléfono es: ' + numTel);

// Condicionales

    /* Operadores de comparación */
    let comida = 'paella';

    /* Igualdad */
    if(comida == 'paella') {
        console.log('Es true si la comida es paella');
    }

    /* No igual */
    if(comida != 'cocido') {
        console.log('Es true si la comida NO es cocido');
    }

    /* Igualdad estricta */
    if(comida === 'paella') {
        console.log('Es true si la comida es paella y es de tipo string');
    }
    
    /* Mayor que */
    let combustible = 50;
    if(combustible > 50) {
        console.log('Es true si el combustible es mayor que 50');
    }

    /* Mayor o igual que */
    if(combustible >= 50) {
        console.log('Es true si el combustible es mayor o igual que 50');
    }

    /* Menor que */
    if(combustible < 50) {
        console.log('Es true si el combustible es menor que 50');
    }

    /* Con la función parseInt() convertimos cadenas de texto a enteros y con parseFloat() convertimos cadenas a decimales. */

    let numeroEntero2 = '32'; // Es una cadena de texto
    let numeroDecimal2 = '4.99'; // Otra cadena de texto
    console.log(parseInt(numeroEntero2));
    console.log(parseFloat(numeroDecimal2));

// Lógica booleana

    /* AND */
    let a2 = true;
    let b2 = true;
    if(a2 && b2) {
        console.log('Es true si a2 y b2 son verdaderos');
    }

    /* OR */
    let a3 = false;
    let b3 = false;
    if(a3 || b3) {
        console.log('Es true si alguno de los dos es verdadero');
    }

    /* NOT */
    let a4 = true;
    if(!a4) {
        console.log('Es true si a4 es falso');
    }

// Funciones

    function suma(a, b) {
        return a + b
    }
    
    /* JavaScript también permite declarar y almacenar funciones dentro de variables. Son las llamadas funciones anónimas porque no tienen un nombre declarado (la variable es la función). */

    let miFuncion = function (horas) {
        return horas * 60;
    }
    v1 = miFuncion(1);
    v2 = miFuncion(40);
    v3 = miFuncion(100);
        
// Bucles

    let i = 0; // iteradores
    let total = 0; // resultado
    while(i < 10) { // mientras se cumpla esta condición
        console.log(i); // lo mostramos por pantalla
        i++; // incrementamos 1
    }
    console.log(total); // mostramos el resultado

    /* Break y continue */

    let recorrido = 0;
    let recorridoPorCombustible = 10;
    let combustible2 = 100;
    let distanciaPlaneta = 1000;
    let anomaliaCosmicaInicio = 500;
    let anomaliaCosmicaFin = 1000;

    while (combustible > 0) {
        recorrido += recorridoPorCombustible;
        
        /*
        * Si la nave entra en la anomalía cósmica, no usará combustible
        */

        if (recorrido >= anomaliaCosmicaInicio && recorrido <= anomaliaCosmicaFin) {
            continue;
        }
        combustible2--;

        if (recorrido >= distanciaPlaneta) {
            console.log("La nave ha llegado");
            break;
        }
    }

    
        