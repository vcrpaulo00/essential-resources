// Forma mais simples de acessar um array

const notas = [10, 6.5, 8, 7.5, 9, 8.5, 5]

let total = 0;

for (let nota of notas) {
    total += nota;
}
// a variável nota of assumi os valores da cada variável dentro do array

const media = total / notas.length;
console.log(`A média é ${media}`)

// for in - percorre o indice sem precisar parametrizar ou em definir o tamanho ou o index

for (let i in notas) {
    console.log(i, notas[i])
}
// imprimir console.log(i, notas[i]) foi acesso cada índice e os seus valores respectivos