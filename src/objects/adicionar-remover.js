const curso = {
    id: 123,
    nome: 'JavaScrip Essencial',
    duracao: 10000, // fazer a conversão de segundo para h/m/s
    aulas: [{}, {}, {}, {}]
}

curso.ativo = true; // adição de um atributo
delete curso.aulas; // remover um atributo

console.log(typeof curso.duracao)