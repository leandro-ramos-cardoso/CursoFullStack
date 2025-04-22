// 70 - Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo array contendo apenas as strings que têm mais de 7 caracteres.

const objetos = ["Setimos", "Vaca", "Boiadas", "Pipa"];

function objetosSeteLetras(objetos) {
    return objetos.filter((i) => i.length === 7);
}

console.log(objetosSeteLetras(objetos));