// 57 - Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo array onde cada string esteja em letras minúsculas e invertida.

const palavras = ["PULAR", "CORDA", "PAPEL", "PNEU"];

function converteEmMinuscula(palavras) {
    return palavras.map((i) => i.toLowerCase().split("").reverse().join(""));
}

console.log(converteEmMinuscula(palavras));