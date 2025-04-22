// 74 - Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo array contendo apenas as strings que contêm a letra "i".

const locais = ["italia", "brasil", "frança", "japão"];

function retornaComLetraI(locais) {
    return locais.filter((i) => i.includes("i"));
}

console.log(retornaComLetraI(locais));