// 52 - Crie um script que declare uma função que receba um array de números como parâmetro e retorne um novo array contendo apenas os números que são menores que 50.

const numeros = [1, 2, 3, 4, 5, 100, 52];

function retornaMenor50(numeros) {
    return numeros.filter((i) => i < 50);
}

console.log(retornaMenor50(numeros));