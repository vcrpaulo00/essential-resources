function Contador(valorInicial = 0) {
    this.numero = valorInicial

    this.incrementar = function() {
        this.numero++;
    }
    this.decrementar = function() {
        this.numero--;
    }
}

const contador = new Contador(); // sem a declaração de um const, foi considerado o 0 da função
contador.incrementar(); // nessa variável, houve a declaração incrementar em cima do número declarado

console.log(contador.numero) // a impressão do valor atual do numero