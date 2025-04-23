// 81 - Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo array onde cada string tenha a primeira letra em maiúscula e a última letra em minúscula. Utilize a função `toUpperCase()` e `toLowerCase()` para converter as letras.

const bairros = ["ernestO", "cabedelO", "mangabeirA", "bancarioS"]

function converteLetras(bairros) {
    return bairros.map((i) => i[0].toUpperCase() + i.slice(1, -1) + i[i.length - 1].toLowerCase());
}

console.log(converteLetras(bairros));