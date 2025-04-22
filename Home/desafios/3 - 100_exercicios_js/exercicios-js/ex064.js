// 64 - Crie um script que declare uma função que receba um array de números como parâmetro e retorne um novo array contendo apenas os números que são maiores que 20.

const numeros = [1, 2, 3, 5, 10, 11, 22, 30, 50];

function maioresQue20(numeros) {
    return numeros.filter((i) => i > 20);
}

console.log(maioresQue20(numeros));