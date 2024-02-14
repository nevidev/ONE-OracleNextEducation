/*
Criar uma função que exibe "Olá, mundo!" no console.
Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.
Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.
Criar uma função que recebe três números como parâmetros e retorna a média deles.
Criar uma função que recebe dois números como parâmetros e retorna o maior deles.
Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo
*/

function ola() {
    console.log('Olá mundo');
}
ola();

function olaNome(nome) {
    console.log(`Olá ${nome}`);
}
olaNome('Neto');

function dobro(num) {
    return console.log(num * 2);
}
dobro(6);

function media(a, b, c) {
    return console.log((a + b + c) / 3 );
}
media(2,6,8);

function maior(i, j) {
    if (i > j) {
        return console.log(i);
    } else {
        return console.log(j);
    }
}
maior(4,9);

function multiplic(k) {
    return console.log(k * k);
}
multiplic(4);