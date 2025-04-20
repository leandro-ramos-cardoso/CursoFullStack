// 43 - Crie um script que declare uma função que receba um array de números como parâmetro e retorne um novo array onde cada número seja multiplicado por 3.

const numeros = [3, 9, 10, 5];

function multiplicaPorCinco(numeros) {
    return numeros.map((i) => i * 3);
}

console.log(multiplicaPorCinco(numeros));