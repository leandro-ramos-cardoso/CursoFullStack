
// 87 - Crie um script que declare uma função que receba um array de números como parâmetro e retorne um novo array onde cada número seja multiplicado por 4.

const numeros = [1, 2, 3, 5];

function multiplicaPor4(numeros) {
    return numeros.map((i) => i * 4);
}

console.log(multiplicaPor4(numeros));