function promessa() {
    return new Promise((resolve) => {
        resolve('Bom dia!');
    })
}

promessa().then((resp) => console.log(resp)); // esse código acontece de forma assíncrona, por isso aparece no final
console.log('Fim!');