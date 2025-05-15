const produto = Object.freeze({
    id: 1,
    nome: "Caneta BIC Preta",
    valor: 1.99,
    categoria: "Escritório",
})

produto.valor = 2.99;
produto.ativo = false

console.log(produto)