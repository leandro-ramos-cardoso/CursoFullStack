// 50 - Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo array contendo apenas as strings que têm exatamente 4 caracteres.

const nomes = ["Manu", "Kel", "Magal", "Mito", "Leo"];

function retornaPalavraCom4(nomes) {
    return nomes.filter((i) => i.length === 4);
}

console.log(retornaPalavraCom4(nomes));