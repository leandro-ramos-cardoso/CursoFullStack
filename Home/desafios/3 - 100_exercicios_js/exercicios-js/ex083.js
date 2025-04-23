// 83 - Crie um script que declare uma função que receba um array de números como parâmetro e retorne um novo array onde cada número seja decrementado em 4.

const numeros = [4, 10, 20];

function diminuiQuatro(numeros) {
    return numeros.map((i) => i - 4);
}

console.log(diminuiQuatro(numeros));