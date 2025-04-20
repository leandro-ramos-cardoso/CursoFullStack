// 45 - Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo array onde cada string esteja em letras maiúsculas e invertida.

const cores = ["Roxo", "Amarelo", "Rosa", "Cinza"];

console.log(cores.map((i) => i.toUpperCase()).reverse());