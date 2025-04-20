// 44 - Crie um script que declare uma função que receba um array de números como parâmetro e retorne um novo array contendo apenas os números que são divisíveis por 2.

const numeros = [2, 4, 13, 15];

function numerosDivisiveisPorDois(numeros) {
    return numeros.filter((i) => i % 2 === 0);
}

console.log(numerosDivisiveisPorDois(numeros));