const somar = a => b => c => a + b + c;

console.log(somar(1)(2)(3));

// nesse caso, foi inserido uma função dentro da outra
// sendo assim, na declaração houve a necessidade de ser feito separadamente