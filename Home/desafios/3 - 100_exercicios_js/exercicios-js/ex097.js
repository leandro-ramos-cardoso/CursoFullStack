// 97 - Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo array onde cada string tenha todas as letras em maiúscula e invertida.

const objetos = ["teste", "lupa", "varal"];

function maiusculaLetras(objetos) {
    return objetos.map((i) => i.toUpperCase().split("").reverse().join(""));
}

console.log(maiusculaLetras(objetos));