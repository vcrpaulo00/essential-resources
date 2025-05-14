const id = 10554
const nome = 'John Lennon'
const email = 'john.lennon@empresa.com'
const ativo = true

function alterarUsuario() {
    console.log('alterando usuário...')
}

const usuario = { id, nome, email, ativo, alterarUsuario}

console.log(usuario)
usuario.alterarUsuario()