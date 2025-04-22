// 49 - Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo array onde cada string tenha a última letra em maiúscula. Utilize a função `toUpperCase()` para converter a última letra.

const palavras = ["pular", "corda", "papel", "pneu"];

function converteUltimaLetraMaiusculo(palavras) {
    return palavras.map((i) => i[0] + i.slice(1, -1) + i[i.length - 1].toUpperCase());
}

console.log(converteUltimaLetraMaiusculo(palavras));