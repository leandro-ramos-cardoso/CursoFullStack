// 37 - Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo array onde cada string esteja invertida. Utilize a função `reverse()` para inverter as strings.
const materiais = ["Tesoura", "Cola", "Lápis", "Borracha"];

function inverteOrdemProdutos(materiais) {
    // Cria uma cópia antes de inverter = [...array].metodo
    produtosInvertidos = [...materiais].reverse();
    return produtosInvertidos;
}

console.log(inverteOrdemProdutos(materiais));
console.log(materiais);