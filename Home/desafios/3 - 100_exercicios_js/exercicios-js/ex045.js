// 45 - Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo array onde cada string esteja em letras maiúsculas e invertida.

const cores = ["roxo", "amarelo", "rosa", "cinza"];

function inverteOrdemComMaiuscula(cores) {
    return cores.map((i) => i.toUpperCase().split('').reverse().join(''));
}

console.log(`Array original: ${cores}`);
console.log(`Array invertido e maiusculo: ${inverteOrdemComMaiuscula(cores)}`);