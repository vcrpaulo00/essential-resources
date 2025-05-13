const numeros = [1, 2, 3];
// apesar de ser uma const (constante), pode ser alterado ou incluir valor

const numbers = Object.freeze([1, 2, 3])
// no caso acima, o array é congelado e irá ignorar qualquer tentativa inserção ou alteração

console.log('Array antes da alteração dos valores index[0]!')
console.log(numeros[0])
console.log(numbers[0])

numeros[0] = 10
numbers[0] = 10

console.log('Array após alteração de valor index[0]!')
console.log(numeros[0])
console.log(numbers[0])

console.log(`O comprimento do Array é ${numeros.length}!`)
console.log(`O último Array está no localizado no Index ${numeros[numeros.length - 1]}!`) 
// não apareceu como 2, necessário verificar