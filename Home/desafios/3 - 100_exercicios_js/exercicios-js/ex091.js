// 91 - Crie um script que declare uma função que receba um array de números como parâmetro e retorne um novo array onde cada número seja incrementado em 6.

const numeros = [1, 2, 3, 4, 5];

function somaSeis(numeros) {
    return numeros.map((i) => i + 6);
}

console.log(somaSeis(numeros));

