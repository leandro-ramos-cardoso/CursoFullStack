// 86 - Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo array contendo apenas as strings que começam com a letra "D".

const palavras = ["Detonar", "duna", "deitar", "pipa", "mesa"];

function iniciaComLetraD(palavras) {
    return palavras.filter((i) => i[0].toLowerCase() === "d");
}

console.log(iniciaComLetraD(palavras));