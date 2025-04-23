// 88 - Crie um script que declare uma função que receba um array de números como parâmetro e retorne um novo array contendo apenas os números que são ímpares e menores que 20.

const numeros = [1, 3, 5, 55, 29, 5, 7, 8, 10];

function retornaImparMenorVinte(numeros) {
    return numeros.filter((i) => i % 2 != 0 && i < 20);
}

console.log(retornaImparMenorVinte(numeros));