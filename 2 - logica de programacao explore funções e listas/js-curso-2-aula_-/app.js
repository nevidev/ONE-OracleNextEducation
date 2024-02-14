let titulo = document.querySelector('h1');
titulo.innerHTML = 'Número secreto';

let parag = document.querySelector('p');
parag.innerHTML = 'Escolha um número entre 1 e 10';

// o mesmo de cima mas como função
function editarTexto(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2} );
}
function msgInicial() {
    editarTexto('h1', 'Número secreto');
    editarTexto('p', 'Escolha um número entre 1 e 10');
}
msgInicial();

let listaNum = [];
let qtdLimite = 10;
let numSecreto = numRandom();
let tentativas = 1;

function verificarChute() {
    let chute = document.querySelector('input').value;
    if (chute == numSecreto) {
        editarTexto('h1', 'Acertou!');
        let tentativasPlural = tentativas > 1 ? 'tentativas' : 'tentativa';
        let msgTentativas = `Você descobriu o número secreto com ${tentativas} ${tentativasPlural}`;
        editarTexto('p', msgTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute < numSecreto) {
            editarTexto('h1', 'Errou');
            editarTexto('p', 'O número secreto é maior');
        } else if (chute > numSecreto) {
            editarTexto('h1', 'Errou');
            editarTexto('p', 'O número secreto é menor');
        }
        tentativas++;
        limparCampo();
    }
}

function numRandom() {
    let numEscolhido = parseInt(Math.random() * qtdLimite + 1);
    let qtdLista = listaNum.length;

    if (qtdLista == qtdLimite) {
        listaNum = [];
    }
    if (listaNum.includes(numEscolhido)) {
        return numRandom();
    } else {
        listaNum.push(numEscolhido);
        return numEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function iniciarJogo() {
    numSecreto = numRandom();
    limparCampo();
    tentativas = 1;
    msgInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}