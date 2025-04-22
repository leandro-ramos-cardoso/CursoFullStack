// 47 - Crie um script que declare uma função que receba um array de números como parâmetro e retorne um novo array onde cada número seja multiplicado por 10.

const numeros = [1, 2, 3, 4, 5, 6, 7];

function multiplicaPor10(numeros) {
    return (numeros.map((i) => i * 10));
}

console.log(multiplicaPor10(numeros).join(","));