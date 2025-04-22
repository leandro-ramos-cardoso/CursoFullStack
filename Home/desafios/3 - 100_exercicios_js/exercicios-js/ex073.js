// 73 - Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo array onde cada string tenha as vogais duplicadas. Utilize a função `replace()` para duplicar as vogais.

const palavras = ["pular", "corda", "papel", "pneu"];

function duplicaVogal(palavras) {
    return palavras.map((i) => i.replace(/[aeiou]/gi, (vogal) => vogal + vogal))
}

console.log(duplicaVogal(palavras));