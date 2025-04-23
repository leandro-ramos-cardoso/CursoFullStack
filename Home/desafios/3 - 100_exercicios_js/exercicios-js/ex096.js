// 96 - Crie um script que declare uma função que receba um array de números como parâmetro e retorne um novo array contendo apenas os números que são múltiplos de 9.

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 27, 90];

function multiplosDeNove(numeros) {
    return numeros.filter((i) => i % 9 === 0);
}

console.log(multiplosDeNove(numeros));