// 53 - Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo array onde cada string tenha as vogais removidas. Utilize a função `replace()` para remover as vogais.

const objetos = ["Impressora", "VassourA"];

function removeVogais(objetos) {
    return objetos.map((i) => i.replace(/[aeiou]/gi, " "));
}

console.log(removeVogais(objetos));