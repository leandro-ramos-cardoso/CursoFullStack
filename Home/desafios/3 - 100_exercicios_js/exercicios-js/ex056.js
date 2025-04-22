// 56 - Crie um script que declare uma função que receba um array de números como parâmetro e retorne um novo array contendo apenas os números que são múltiplos de 4.

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function retornaMultiposQuatro(numeros) {
    return numeros.filter((i) => i % 4 === 0);
}

console.log(retornaMultiposQuatro(numeros));