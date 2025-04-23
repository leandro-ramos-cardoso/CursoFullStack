// 84 - Crie um script que declare uma função que receba um array de números como parâmetro e retorne um novo array contendo apenas os números que são maiores que 25.

const numeros = [1, 2, 4, 25, 20, 40, 55, 100];

function maioresQue25(numeros) {
    return numeros.filter((i) => i > 25);
}

console.log(maioresQue25(numeros));