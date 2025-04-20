// 42 - Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo array contendo apenas as strings que têm mais de 5 caracteres.

const roupas = ["Luva", "Camisa", "Meia", "Calça", "Macacão"];

function roupasComMaisDe5Letras(roupas) {
    return roupas.filter((i) => i.length > 5);
}

console.log(roupasComMaisDe5Letras(roupas))
