// 49 - Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo array onde cada string tenha a última letra em maiúscula. Utilize a função `toUpperCase()` para converter a última letra.

const palavras = ["Pular", "Corda", "Papel", "Pneu"];

console.log(palavras.map((i) => i.slice(-1).toUpperCase()).join());