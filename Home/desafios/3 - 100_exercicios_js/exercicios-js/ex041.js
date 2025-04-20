// 41 - Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo array onde cada string tenha a primeira letra em maiúscula. Utilize a função `toUpperCase()` para converter a primeira letra.

const brinquedos = ["bola", "boneca", "pipa", "carro"];

function converteLetraInicial(brinquedos) {
    return brinquedos.map((i) => i.charAt(0).toUpperCase() + i.slice(1));
}

console.log(converteLetraInicial(brinquedos));