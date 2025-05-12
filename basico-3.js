
function somar(x, y = 0) {
    return x + y
}
let resultado1 = somar(2, 5)
let resultado2 = somar(3) // caso o valor y não seja inserido, a função usará o valor declarado 0

console.log(resultado1)
console.log(resultado2)

// no modelo 1 acaba sendo bastante restrito, já nesse caso é possível gerar paramêtros.