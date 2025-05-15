// extrair atributos de um objeto
const carrinho = {
    qtdeItens: 3,
    total: 1251.20,
    itens: [{}, {}, {}],
}

const { qtdeItens, total } = carrinho;

console.log(qtdeItens)

// extrair atributos de um array
const nomeCompleto = [
    'Pedro',
    'Silva',
    'Pereira'
];

const [a, b, c] = nomeCompleto
console.log(a, b, c)