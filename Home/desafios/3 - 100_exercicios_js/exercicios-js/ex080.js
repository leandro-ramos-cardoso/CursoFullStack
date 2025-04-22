// 80 - Crie um script que declare uma função que receba um array de números como parâmetro e retorne um novo array contendo apenas os números que são divisíveis por 8.

const numeros = [1, 2, 4, 5, 6, 8, 10, 80];

function divisiveisPorOito(numeros) {
    return numeros.filter((i) => i % 8 === 0);
}

console.log(divisiveisPorOito(numeros));