function saudarDepoisDe(tempoEmSegundos = 0) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Bom dia, rapaze')
        }, tempoEmSegundos * 1000)
    })
}

saudarDepoisDe(10).then((resp) => console.log(resp + '!!!'));

console.log('FIM!!!')