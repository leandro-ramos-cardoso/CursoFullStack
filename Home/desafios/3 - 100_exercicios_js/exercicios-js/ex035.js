// 35 - Crie um script que declare uma função que receba um array de números como parâmetro e retorne um novo array onde cada número seja decrementado em 1.
const numeros = [5, 15, 20, 100];

function diminuiNumeros(numeros) {
    let resultado = (numeros.map((i) => i - 1));
    return resultado;
}

console.log(diminuiNumeros(numeros));