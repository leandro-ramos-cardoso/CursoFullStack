// 66 - Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo array contendo apenas as strings que começam com a letra "C".

const palavras = ["Corpo", "Camaleão", "Mala", "Jarro"];

function iniciadosComC(palavras) {
    return palavras.filter((i) => i.startsWith("C"));
}

console.log(iniciadosComC(palavras));