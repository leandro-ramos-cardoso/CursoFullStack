// 92 - Crie um script que declare uma função que receba um array de números como parâmetro e retorne um novo array contendo apenas os números que são menores que 35.

const numeros = [1, 4, 5, 455, 343];

function menorQue35(numeros) {
    return numeros.filter((i) => i < 35);
}

console.log(menorQue35(numeros));