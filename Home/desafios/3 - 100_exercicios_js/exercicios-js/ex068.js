// 68 - Crie um script que declare uma função que receba um array de números como parâmetro e retorne um novo array contendo apenas os números que são ímpares e maiores que 15.

const numeros = [1, 2, 4, 29, 44, 3, 105];

function imparesMaioresQuinze(numeros) {
    return numeros.filter((i) => i % 2 != 0 && i > 15);
}

console.log(imparesMaioresQuinze(numeros));