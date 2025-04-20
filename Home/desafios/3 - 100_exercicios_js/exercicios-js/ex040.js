// 40 - Crie um script que declare uma função que receba um array de números como parâmetro e retorne um novo array contendo apenas os números que são maiores que 10.
const numeros = [1, 2, 10, 20, 30, 9, 5];

function numerosMaioresQueDez(numeros) {
    return numeros.filter((i) => i > 10);
}

console.log(numerosMaioresQueDez(numeros));
console.log(`Array Original: ${numeros}`);