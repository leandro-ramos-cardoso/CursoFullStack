// 36 - Crie um script que declare uma função que receba um array de números como parâmetro e retorne um novo array contendo apenas os números que são múltiplos de 5.
const numeros = [5, 10, 43, 55, 70, 60];

function multiplosDe5(numeros) {
    let multiplo = numeros.filter((i) => i % 5 === 0);
    return multiplo;
}

console.log(`Os multiplos de 5 são: ${multiplosDe5(numeros)}`);