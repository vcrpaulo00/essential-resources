function esperar(tempoEmsegundos = 0) {
    setTimeout(() => {
        console.log('tests')
    }, tempoEmsegundos * 1000)
}

esperar(5)
console.log("Fim!!")