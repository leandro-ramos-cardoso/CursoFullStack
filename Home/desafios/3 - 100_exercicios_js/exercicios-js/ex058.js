// 58 - Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo array contendo apenas as strings que contêm a letra "o".

const objetos = ["Vassoura", "Exame", "Teste", "Pascoa"];

function palavrasComLetraO(objetos) {
    return objetos.filter((i) => i.includes("o"));
}

console.log(palavrasComLetraO(objetos));