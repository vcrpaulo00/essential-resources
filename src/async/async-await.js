async function obterTituloPagina(url) {
    const resp = await fetch(url);
    const html = await resp.text();
    const titulo = html.split('<title>')[1].split('</title>')[0];
    return titulo;
}

async function outra() {
    const url = 'https://www.youtube.com/watch?v=WRlfwBof66s&ab_channel=TigerCodes'
    const titulo = await obterTituloPagina(url);
    console.log(titulo)

}

outra()
console.log('Fim!!!')