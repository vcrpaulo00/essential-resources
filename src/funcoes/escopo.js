function teste() {
    let x = 10;
    console.log(x)
}

console.log(x)

// existe um escopo dentro e fora da função, os quais podem ter suas próprias variáveis
// vale ressaltar que o código não rodou, devido existir um escopo interno (só pode ser visível dentro da função)
// sendo assim, não podendo ser acessado por quem está fora do bloco

let y = 5;

function teste() {
    let x = 10;
    console.log(x)
    console.log(y)
}

teste();
console.log(y)

// após rodar nesse caso acima, na linha 19 é acesso a função 'teste()'
// no console.log(x) é acesso a variável declarada na linha 12
// após alterar a declaração de x para y, o escopo interno consegue acessar a variável y, mas o externo não acessa o interno 