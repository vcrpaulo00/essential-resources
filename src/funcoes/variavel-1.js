function bomDia() {
    console.log('Bom dia!');
}

let saudacao = bomDia // se colocar bomDia(), resultado será undefined 
// vale ressaltar que o let é uma variável, sendo assim, a função foi armazenada dentro da variável
saudacao();

console.log(typeof saudacao)