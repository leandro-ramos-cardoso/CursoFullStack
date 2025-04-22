// 60 - Crie um script que declare uma função que receba um array de números como parâmetro e retorne um novo array contendo apenas os números que são divisíveis por 7.

const numeros = [2, 3, 7, 10, 70];

function divisoresDeSete(numeros) {
    return numeros.filter((i) => i % 7 === 0);
}

console.log(divisoresDeSete(numeros));