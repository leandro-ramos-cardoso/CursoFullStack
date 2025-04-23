// 89 - Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo array onde cada string tenha a primeira letra em minúscula e a última letra em maiúscula. Utilize a função `toLowerCase()` e `toUpperCase()` para converter as letras.

const palavras = ["Pipa", "Bola", "Celular", "Computador"];

function converteLetras(palavras) {
    return palavras.map((i) => i[0].toLowerCase() + i.slice(1, -1) + i[i.length - 1].toUpperCase());
}

console.log(converteLetras(palavras));