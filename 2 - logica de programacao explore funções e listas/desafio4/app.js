/*
Crie uma lista vazia, com o nome listaGenerica.
Crie uma lista de linguagens de programação chamada linguagensDeProgramacao com os seguintes elementos: 'JavaScript','C','C++', 'Kotlin' e 'Python'.
Adicione à lista linguagensDeProgramacao os seguintes elementos: 'Java', 'Ruby' e 'GoLang'.
Crie uma lista com 3 nomes e exiba no console apenas o primeiro elemento.
Crie uma lista com 3 nomes e exiba no console apenas o segundo elemento.
Crie uma lista com 3 nomes e exiba no console apenas o último elemento.
*/

let listaGenerica = [];

let linguagensDeProgramacao = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];
console.log(linguagensDeProgramacao);

linguagensDeProgramacao.push('Java', 'Ruby', 'GoLang');
console.log(linguagensDeProgramacao);

console.log(linguagensDeProgramacao[0]);
console.log(linguagensDeProgramacao[1]);
console.log(linguagensDeProgramacao[linguagensDeProgramacao.length -1]);