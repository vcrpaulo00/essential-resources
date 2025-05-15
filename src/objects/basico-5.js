const calculadora = {
    resultado: 0,
    somar(a) {
        this.resultado += a;
        return this;
    },
    multiplicar(a) {
        this.resultado *= a;
        return this;
    },
    elevarAoQuadrado() {
        this.resultado **= this.resultado;
        return this;
    },
    zerar() {
        this.resultado = 0;
        return this;
    }
}

const r = calculadora.somar(5).somar(7).multiplicar(3).resultado

console.log(r)

const raio = 10;
const PI = 3.1415;
const area = calculadora
    .zerar()
    .somar(raio)
    .aoQuadrado()
    .multiplicar(PI)
    .resultado

console.log(area)