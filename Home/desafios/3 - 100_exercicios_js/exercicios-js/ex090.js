// 90 - Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo array contendo apenas as strings que têm exatamente 9 caracteres.

const palavras = ["marinheiro", "cavalaria", "teste", "lorem"];

function retornaNoveLetras(palavras) {
    return palavras.filter((i) => i.length === 9);
}

console.log(retornaNoveLetras(palavras));