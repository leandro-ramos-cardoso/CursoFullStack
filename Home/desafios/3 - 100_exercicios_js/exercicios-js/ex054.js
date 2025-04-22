// 54 - Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo array contendo apenas as strings que começam com a letra "B".

const brinquedos = ["Bola", "Bexiga", "Maleta", "Telefone"];

function retornaComB(brinquedos) {
    return brinquedos.filter((i) => i.startsWith("B"));
}

console.log(retornaComB(brinquedos));