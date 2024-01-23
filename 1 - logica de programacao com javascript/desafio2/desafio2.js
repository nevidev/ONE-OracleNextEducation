/* 
Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". Caso contrário, mostre "Boa semana!".
Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando.
Crie um sistema de pontuação para um jogo. Se a pontuação for maior ou igual a 100, mostre "Parabéns, você venceu!". Caso contrário, mostre "Tente novamente para ganhar.".
Crie uma mensagem que informa o usuário sobre o saldo da conta, usando uma template string para incluir o valor do saldo.
Peça ao usuário para inserir seu nome usando prompt. Em seguida, mostre um alerta de boas-vindas usando esse nome.
*/

// questão 1
let dia = prompt('Que dia é hoje?');
if (dia.toUpperCase() == 'SÁBADO' || dia.toUpperCase() == 'DOMINGO' || dia.toUpperCase() == 'SABADO') {
    alert('Bom final de semana!');
} else {
    alert('Boa semana!');
}

// questão 2
let num = prompt('Digite um número positivo ou negativo:');
if (num < 0) {
    alert('É um número negativo');
} else {
    alert('É um número positivo');
}

// questão 3
let pontos = 102;
if (pontos >= 100) {
    console.log(`Parabéns, você venceu! com pontuação de ${pontos}`);
} else {
    console.log('Tente novamente para ganhar');
}

// questão 4
let saldo = 300;
alert(`Seu saldo em conta é de R$ ${saldo}`);

// questão 5
user = prompt('Digite seu nome:');
alert(`Bem vindo ${user}`);
