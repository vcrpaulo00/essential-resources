// cálcular a média do array

const notas = [10, 6.5, 8, 7.5, 9, 8.5, 5]

let total = 0; // declaração como variável, devido o incremento durante a leitura do array

for (let i = 0; i < notas.length; i++) {
    total += notas[i];
}

const media = total / notas.length;

console.log(`A média é ${media}`);

console.log(0.1 + 0.2) // O padrão IEEE-754 descreve formatos de ponto flutuante
