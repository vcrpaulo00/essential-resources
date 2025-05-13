function somar(a) {
    return function(b) {
        return a + b;
    }
}

const somarComQuatro = somar(4);
const somarComCem = somar(100);

// a const acima foi declarado o somar(a) função principal, no console abaixo é declarado a função interna
console.log(somarComQuatro(7))
console.log(somarComQuatro(10))
console.log(somarComCem(120))
console.log(somarComCem(150))

// no console é feito a declação separadamente, através de cada valor em suas chaves (diferentes funções)
console.log(somar(3)(85))
console.log(somar(9)(97))