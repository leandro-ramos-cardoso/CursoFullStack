// 95 - Crie um script que declare uma função que receba um array de números como parâmetro e retorne um novo array onde cada número seja elevado à quinta potência.

const numeros = [1, 2, 4];

function elevarAQuinta(numeros) {
    return numeros.map((i) => i ** 5);
}

console.log(elevarAQuinta(numeros));