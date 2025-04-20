// 39 - Crie um script que declare uma função que receba um array de números como parâmetro e retorne um novo array onde cada número seja convertido para uma string com duas casas decimais. Utilize a função `toFixed()` para formatar os números.
const numeros = [1, 2, 3, 4];

function ajusteCasasDecimais(numeros) {
    return (numeros.map((i) => i.toFixed(2)));
}

console.log(ajusteCasasDecimais(numeros));