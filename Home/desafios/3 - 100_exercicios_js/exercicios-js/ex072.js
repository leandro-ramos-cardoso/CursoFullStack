// 72 - Crie um script que declare uma função que receba um array de números como parâmetro e retorne um novo array contendo apenas os números que são menores que 30.

const numeros = [1, 9, 10, 30, 544, 134324];

function menoresQueTrinta(numeros) {
    return numeros.filter((i) => i < 30);
}

console.log(menoresQueTrinta(numeros));
