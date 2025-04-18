const produtos = ["MOUSE", "TECLADO", "MACBOOK", "IPAD", "IPHONE"];

function converterParaMinusculo(produtos) {
    return produtos.map((i) => i.toLowerCase());
}

console.log(`
======================
\x1b[1m\x1b[33m* Antes de Converter *\x1b[0m
======================
`);
console.log(produtos);

console.log(`
=======================
\x1b[1m\x1b[33m* Depois de Converter *\x1b[0m
=======================
`);
console.log(converterParaMinusculo(produtos));