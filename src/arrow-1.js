const gritar = function (texto) {
    return texto.toUpperCase();
}

console.log(gritar('olá'))

// Arrow (código fica mais enxuto)

const caixaAlta = (text) => text.toUpperCase();
const exclamar = (text) => text + '!!!';

console.log(caixaAlta('hey world'))
console.log(exclamar(caixaAlta('hey world')))

// sem o corpo, é obrigatório eliminar o return
// o simbolo '=>' elimina o necessidade de declarar que é uma function