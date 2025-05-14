const raios = [1, 3, 5]

const aoQuadrado = n => n ** 2
const multiplicarPorPI = n => n * Math.PI

const areas = raios.map(aoQuadrado).map(multiplicarPorPI)
console.log(areas)

// todos os raios foram primeiro elevado ao quadrado e depois multiplicado pelo PI
// as funções aoQuadrado / multiplicarPorPI foram passadas como parametro para outra função (map)
console.log(typeof raios.map)