// 63 - Crie um script que declare uma função que receba um array de números como parâmetro e retorne um novo array onde cada número seja decrementado em 2.

const numeros = [1, 2, 3, 4, 5];

function diminuiDois(numeros) {
    return numeros.map((i) => i - 2);
}

console.log(diminuiDois(numeros));