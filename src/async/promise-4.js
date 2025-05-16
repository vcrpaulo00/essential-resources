// Título de uma página do Youtube, processando 
fetch('https://www.youtube.com/watch?v=CvdkPPovDVU&ab_channel=AugustoGalego') //fetch faz a requisição externa
    .then((resp) => resp.text())
    .then((html) => html.split('<title>')[1])
    .then((html) => html.split('</title>')[0])
    .then(console.log)
    