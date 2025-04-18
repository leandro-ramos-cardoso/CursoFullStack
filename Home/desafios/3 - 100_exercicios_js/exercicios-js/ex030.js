// 30 - Crie um script que declare um objeto chamado `carro` com as propriedades `modelo`, `ano` e `cor`. Inicialize o objeto com valores e imprima todas as propriedades usando `console.log`.
const carro = {
    modelo: "Argo",
    ano: 2025,
    cor: "Branco"
}

console.log(carro);

console.log(`
=====================================
           \x1b[1m\x1b[33m* FORMATADO *\x1b[0m
=====================================
`);

console.table([carro]);