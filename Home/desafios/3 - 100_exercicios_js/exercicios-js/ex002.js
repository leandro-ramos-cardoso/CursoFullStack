const codigoProduto = 1;
var produto = "Agua de coco";

function exibirCategoriaProduto() {
    let categoria = "Bebidas";
    return categoria;
}

console.log(`
\x1b[32m==========================================\x1b[0m
            \x1b[1m\x1b[33mSISTEMA DE PRODUTOS\x1b[0m
\x1b[32m==========================================\x1b[0m
    `);


console.log(`Produto: ${produto}`);
console.log(`Categoria: ${exibirCategoriaProduto()}`);
console.log(`Código: ${codigoProduto}`);

console.log("\n\x1b[32m==========================================\x1b[0m")