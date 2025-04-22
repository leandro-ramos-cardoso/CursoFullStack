// 62 - Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo array contendo apenas as strings que têm exatamente 6 caracteres.

const frutas = ["Banana", "Uva", "Mangaba", "Batata"];

function frutasComSeisLetras(frutas) {
    return frutas.filter((i) => i.length === 6);
}

console.log(frutasComSeisLetras(frutas));