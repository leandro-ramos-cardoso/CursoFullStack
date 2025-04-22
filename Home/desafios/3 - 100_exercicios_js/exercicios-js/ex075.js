// 75 - Crie um script que declare uma função que receba um array de números como parâmetro e retorne um novo array onde cada número seja elevado à quarta potência.

const numeros = [1, 2, 3, 4];

function elevarQuarta(numeros) {
    return numeros.map((i) => i ** 4);
}

console.log(elevarQuarta(numeros));