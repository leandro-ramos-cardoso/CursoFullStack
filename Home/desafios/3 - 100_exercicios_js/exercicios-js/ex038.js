// 38 - Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo array contendo apenas as strings que terminam com a letra "a".
const pessoas = ["Manuela", "Jamerson", "José", "Kézya", "MargaridA"];

function nomeTerminadosLetraA(pessoas) {
    return (pessoas.filter((i) => i.toLowerCase().endsWith("a")));
}

console.log(nomeTerminadosLetraA(pessoas));