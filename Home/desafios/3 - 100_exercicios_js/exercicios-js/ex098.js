// 98 - Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo array contendo apenas as strings que contêm a letra "z".

const personagens = ["Zorro", "zabele", "donald", "pateta"];

function retornaComZ(personagens) {
    return personagens.filter((i) => i.toLowerCase().includes("z"));
}

console.log(retornaComZ(personagens));