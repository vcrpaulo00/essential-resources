// Objeto literais => chave: 'valor' ('text', 123, true, [], {})
const usuario = {
    id: 6452,
    nome: 'Pedro Schender',
    email: 'pschender@info.com.br',
    senha: '@pAaki215',
    ativo: true
}

console.log(usuario['nome']) // forma mais simples de acessar os dados de um objeto, via chave (nome, id ou ativo)
console.log(usuario.id) // acessando as propriedades do objeto 
console.log(usuario.email)