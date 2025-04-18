// 29 - Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo array contendo apenas as strings que começam com a letra "A".
const frutas = ["Abacaxi", "Banana", "Amora", "Pêra", "Abacate"];

function frutasIniciadasComLetraA(frutas) {

    return frutas.filter((i) => i.toLowerCase().startsWith("a"));
}

console.log(frutasIniciadasComLetraA(frutas));