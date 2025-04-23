// 82 - Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo array contendo apenas as strings que têm exatamente 8 caracteres.

const bairros = ["ernestO", "cabedelO", "mangabei", "bancarioS"]

function retornaOitoCaracteres(bairros) {
    return bairros.filter((i) => i.length === 8);
}

console.log(retornaOitoCaracteres(bairros));