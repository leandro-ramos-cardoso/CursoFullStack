// 93 - Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo array onde cada string tenha as vogais triplicadas. Utilize a função `replace()` para triplicar as vogais.

const objetos = ["Vaso", "Jarro", "Vassoura"];

function triplicaVogal(objetos) {
    return objetos.map((i) => i.replace(/[aeiou]/gi, (vogal) => vogal + vogal + vogal));
}

console.log(triplicaVogal(objetos));