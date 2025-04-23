// 94 - Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo array contendo apenas as strings que contêm a letra "y".

const nomes = ["kézYa", "manuela", "margarida", "josemir", "leandro"];

function nomesComY(nomes) {
    return nomes.filter((i) => i.toLowerCase().includes("y"))
}

console.log(nomesComY(nomes));