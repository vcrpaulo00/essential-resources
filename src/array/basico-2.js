const coisas = [
    'texto',
    1.56,
    true,
    [1, 2, 3],
    {nome: 'Paulo'}
]

console.log(coisas.length)

// Adicionando elementos no array
coisas.push('novo item'); // adiciona ao final da lista
coisas.push(10);
coisas.unshift('primeiro item'); // adiciona ao topo da lista

// Eliminando elementos no array
const removido2 = coisas.shift(); // elimina o primeiro item da lista
const removido1 = coisas.pop(); // elimina o último da lista

console.log(removido1, removido2);
console.log(coisas);