// 46 - Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo array contendo apenas as strings que contêm a letra "e".

const eletronicos = ["mousE", "monitor", "teclado", "ipad"];

function palavrasComE(eletronicos) {
    return eletronicos.filter((i) => i.toLowerCase().includes("e"));
}

console.log(palavrasComE(eletronicos));
