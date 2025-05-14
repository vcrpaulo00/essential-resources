const myList = [
    'Paulo',
    'Bryan',
    'Reinaldo',
    'Robson',
    'Luciano',
    'Kaique',
    'Leandro'
]
// o ponto '.' é usado para acessar propriedades e métodos de um objeto
// nomeDoObjeto.nomeDaPropriedade

function exibirElemento(nome, indice) {
    console.log(`${indice + 1}) ${nome}`)
}

myList.forEach(exibirElemento);