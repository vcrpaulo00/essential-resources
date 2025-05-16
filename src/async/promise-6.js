function promessa() {
    return new Promise((resolve, rejeitar) => {
        if(Math.random() < 0.5) {
            resolve('Bom dia!')
        } else 
            rejeitar('sai fora!!')
    })
}

promessa()
    .then((resp) => console.log(resp + ' then'))
    .catch((resp) => console.log(resp + ' catch'))
