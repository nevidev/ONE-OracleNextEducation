/*
Crie um programa que utilize o console.log para exibir uma mensagem de boas-vindas.
Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o console.log para exibir a mensagem "Olá, [seu nome]!" no console do navegador.
Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o alert para exibir a mensagem "Olá, [seu nome]!" .
Utilize o prompt e faça a seguinte pergunta: Qual a linguagem de programação que você mais gosta?. Em seguida, armazene a resposta em uma variável e mostre no console do navegador.
Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a soma desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A soma de [valor1] e [valor2] é igual a [resultado]." no console.
Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a subtração desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A diferença entre [valor1] e [valor2] é igual a [resultado]." no console.
Peça ao usuário para inserir sua idade com prompt. Com base na idade inserida, utilize um if para verificar se a pessoa é maior ou menor de idade, exibindo uma mensagem apropriada no console.
Crie uma variável "numero" e peça um valor com prompt verifique se é positivo, negativo ou zero. Use if-else para imprimir a respectiva mensagem.
Use um loop while para imprimir os números de 1 a 10 no console.
Crie uma variável "nota" e atribua um valor numérico a ela. Use if-else para determinar se a nota é maior ou igual a 7 e exiba "Aprovado" ou "Reprovado" no console.
Use o Math.random para gerar qualquer número aleatório e exiba esse número no console.
Use o Math.random para gerar um número inteiro entre 1 e 10 e exiba esse número no console.
Use o Math.random para gerar um número inteiro entre 1 e 1000 e exiba esse número no console.
*/

console.log('Bem vindo!');

let nome = 'Neto';
console.log(`Olá ${nome}`);

let nome2 = 'Bea';
alert(`Olá ${nome2}`);

let perg = prompt('Qual a linguagem de programação que você mais gosta?');
console.log(perg);

let valor1 = 12;
let valor2 = 16;
let result = valor1 + valor2;
console.log(`A soma entre ${valor1} e ${valor2} é: ${result}`);

let valor3 = 6;
let valor4 = 5;
let result2 = valor3 - valor4;
console.log(`A diferença entre ${valor3} e ${valor4} é: ${result2}`);

let idade = prompt('Qual sua idade?');
if (idade >= 18) {
    console.log(`Com ${idade} anos você é maior de idade`);
} else {
    console.log(`Com ${idade} anos você é menor de idade`);
}

let numero = prompt('Digite um numero positivo, negativo ou zero');
if (numero > 0) {
    console.log(`O número ${numero} é um positivo`);
} else if (numero < 0) {
    console.log(`O número ${numero} é um negativo`);
} else {
    console.log(`O número é zero`);
}

let i = 1;
while (i <= 10) {
    console.log(i);
    i++;
}

let nota = 6;
if (nota >= 7) {
    console.log(`Com nota ${nota} você está aprovado!`);
} else {
    console.log(`Com nota ${nota} você está reprovado!`);
}

let rand = Math.random();
console.log(rand);

let rand2 = parseInt(Math.random() * 10 + 1);
console.log(rand2)

let rand3 = parseInt(Math.random() * 1000 + 1);
console.log(rand3)
