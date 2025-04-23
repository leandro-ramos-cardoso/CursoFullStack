// 85 - Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo array onde cada string tenha as consoantes duplicadas. Utilize a função `replace()` para duplicar as consoantes.

const palavras = ["maquina", "jarro", "lampada", "impressora"];

function dobraConsoante(palavras) {
    return palavras.map((i) => i.replace(/[^aeiou]/gi, (consoante) => consoante + consoante));
}

console.log(dobraConsoante(palavras));