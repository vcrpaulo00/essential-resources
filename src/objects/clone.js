// clone objeto
const usuario = Object.freeze({
    id: 120,
    nome: 'Paulo Victor',
    email: 'paulo@empresa.com',
    admin: false,
})

const novoUsuario = Object.freeze(
    { ...usuario, admin: true, nome: 'Paulo Victor C.'}
)

console.log(usuario)
console.log(novoUsuario)

// clone no array
const numeros = [1, 2, 4]
const maisNumeros = [...numeros, 4, 6, 10]

// inserção de valores no array e em seu clone, por se tratar de diferente espaços na memória, a adição ocorre sem erros.
numeros[1] = 2.7
maisNumeros[1] = 2.5

console.log(numeros, maisNumeros)