// 78 - Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo array contendo apenas as strings que contêm a letra "u".

const palavras = ["brasil", "jUca", "banana", "letra", "uva"];

function palavrasComU(palavras) {
    return palavras.filter((i) => i.toLowerCase().includes("u")); 
}

console.log(palavrasComU(palavras));

