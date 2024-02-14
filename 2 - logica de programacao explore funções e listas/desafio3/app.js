/*
Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.
Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.
Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.
Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.
Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.
Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.
*/

function imc(altura, peso) {
    let imc = peso / (altura * altura);
    return console.log('IMC: '+ imc.toFixed(2));
}
imc(1.77, 68);

function fat(num) {
    if (num === 0 || num === 1) {
        return 1;
    }

    let fatorial = 1;
    for (let i = 2; i <= num; i++) {
        fatorial = fatorial * i;
    }
    return console.log(`Fatorial de ${num} é ${fatorial}`);
}
fat(5);

function conv(dolar) {
    let convertido = dolar * 4.8;
    return console.log(`US$ ${dolar} equivale a R$ ${convertido}`);
}
conv(10);

function medidas(alt, larg) {
    let area = alt * larg;
    let perimetro = (alt * 2) + (larg * 2);
    return console.log(`Área: ${area}m² e perímetro: ${perimetro}m`);
}
medidas(5,8);

function medidaO(raio) {
    let pi = 3.14
    let area2 = 2 * pi * raio;
    let perimetro2 = pi * (raio * raio); 
    return console.log(`Área: ${area2.toFixed(2)}m² e perímetro: ${perimetro2}m`)
}
medidaO(5)

function tabuada(valor) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${i} * ${valor} = ${i*valor}`);
    }
}
tabuada(9);