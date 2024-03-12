
function horasAMinutos(horas) {
    let resultado;
    resultado = horas * 60;
    return resultado;
}

let horas = prompt('Dame las horas')

let minutos = horasAMinutos(horas)

console.log(minutos)


