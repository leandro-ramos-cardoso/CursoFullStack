// 28 - Crie um script que declare uma função que receba um array de números como parâmetro e retorne um novo array contendo apenas os números que são múltiplos de 3.
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

function retornaMultiplosDe3(numeros) {
    return numeros.filter((i) => i % 3 === 0);
}

console.log(retornaMultiplosDe3(numeros));