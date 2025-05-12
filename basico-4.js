function ultima() {
    console.log('Última Função')
}

function tercearia() {
    console.log('[INICIO] Função tercearia')
    ultima()
    console.log('[FIM] Função tercearia')
}

function secundaria() {
    console.log('[INICIO] Função secundaria')
    tercearia()
    console.log('[FIM] Função secundaria')
}

function primaria() {
    console.log('[INICIO] Função principal')
    secundaria()
    console.log('[FIM] Função principal')
}

primaria()