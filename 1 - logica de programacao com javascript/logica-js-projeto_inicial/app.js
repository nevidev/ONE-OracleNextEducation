alert('Bem vindo ao jogo de advinhação');
let numMax = 100;

// pegar número inteiro random entre 1 e 10
let numSecreto  = parseInt(Math.random() * numMax + 1);
console.log(`Número secreto: ${numSecreto}`);
let numEscrito;
let cont = 1;

// enquanto o numEscrito for diferente do numSecreto
while (numEscrito != numSecreto) {
    numEscrito = prompt(`Escreva um número entre 1 e ${numMax}`);
    console.log(`Comparação entre o número secreto e o escrito: ${numSecreto==numEscrito}`);

    // se o numEscrito for igual ao numSecreto
    if (numSecreto == numEscrito) {
        break;

    // senão
    } else {
        if (numEscrito > numSecreto) {
            alert(`o número secreto é menor que ${numEscrito}`);
        } else {
            alert(`o número secreto é maior que ${numEscrito}`);
        }
        cont++;
    }
}

// cont é maior que 1? use 'tentativas', senão use 'tentativa'
let palavraTentativa = cont > 1 ? 'tentativas' : 'tentativa';
alert(`Você acertou com ${cont} ${palavraTentativa}! era o número ${numSecreto}`);

