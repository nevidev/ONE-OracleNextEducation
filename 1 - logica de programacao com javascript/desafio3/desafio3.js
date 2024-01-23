/*
Crie um contador que comece em 1 e vá até 10 usando um loop while. Mostre cada número.
Crie um contador que começa em 10 e vá até 0 usando um loop while. Mostre cada número.
Crie um programa de contagem regressiva. Peça um número e conte deste número até 0, usando um loop while no console do navegador.
Crie um programa de contagem progressiva. Peça um número e conte de 0 até esse número, usando um loop while no console do navegador.
*/

console.log('De 1 até 10:')
let cont = 1;
while (cont <= 10) {
    console.log(cont);
    cont++;
}

console.log('De 10 até 0:')
let cont2 = 10;
while (cont2 >= 0) {
    console.log(cont2);
    cont2--;
}

let num = prompt('Digite um número')
console.log(`De ${num} até 0:`)
while (num >= 0) {
    console.log(num);
    num--;
}

let cont3 = 0;
let num2 = prompt('Digite outro número')
console.log(`De 0 até ${num2}:`)
while (cont3 <= num2) {
    console.log(cont3);
    cont3++;
}
