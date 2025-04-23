// 100 - Crie um script que declare uma função que receba um array de números como parâmetro e retorne um novo array contendo apenas os números que são divisíveis por 10.

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20];

function diviseisPorDez(numeros) {
    return numeros.filter((i) => i % 10 === 0);
}

console.log(diviseisPorDez(numeros));