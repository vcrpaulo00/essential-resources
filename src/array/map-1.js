// Map tem como trabalho percorrer cada elemento e ao mesmo tempo, transforma-o em outro

const numeros = [1, 3, 5, 7, 9]

const dobro = n => n * 2
const triplo = n => n * 3
const aoQuadrado = n=> n ** 2

const novosNumeros = numeros.map(dobro).map(triplo).map(aoQuadrado)

console.log(numeros.map(dobro))
console.log(numeros.map(triplo))
console.log(`O valor ao quadrado de (${numeros}) é igual a (${numeros.map(aoQuadrado)})`)