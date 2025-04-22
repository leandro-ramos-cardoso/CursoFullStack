// 69 - Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo array onde cada string tenha a primeira e a última letra em minúscula. Utilize a função `toLowerCase()` para converter as letras.

const palavras = ["PULAR", "CORDA", "PAPEL", "PNEU"];

function convertePrimeiraUltimaLetra(palavras) {
    return palavras.map((i) => i[0].toLowerCase() + i.slice(1, -1) + i[i.length -1].toLowerCase());
}

console.log(convertePrimeiraUltimaLetra(palavras));