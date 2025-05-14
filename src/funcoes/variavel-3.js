function somar(numeroA, numeroB, funcao) {
    let resultado = numeroA + numeroB;

    if(funcao != null && typeof funcao === 'function') {
        return funcao(resultado);
    } else {
        return resultado;
    }
}

let x = 3
let y = 7

let triplo = function(numero) {
    return numero * 3
}

let dobro = function(numero) {
    return numero * 2
} 

console.log(somar(x, y, triplo))
console.log(somar(x, y, dobro))