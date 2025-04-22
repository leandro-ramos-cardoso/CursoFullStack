// 65 - Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo array onde cada string tenha as consoantes removidas. Utilize a função `replace()` para remover as consoantes.

const palavras = ["Pote", "Barril", "Ventilador", "Vassoura"];

function removeConsoantes(palavras) {
    return palavras.map((i) => i.replace(/[^aeiou]/gi, ""));
}

console.log(removeConsoantes(palavras));