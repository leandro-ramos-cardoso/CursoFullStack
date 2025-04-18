const frutas = ["banana", "maçã", "abacaxi"];

function converterParaMaiusculo(frutas) {
    return frutas.map((i) => i.toUpperCase());
}

console.log(`
======================
\x1b[1m\x1b[33m* Antes de Converter *\x1b[0m
======================
`);
console.log(frutas);

console.log(`
=======================
\x1b[1m\x1b[33m* Depois de Converter *\x1b[0m
=======================
`);
console.log(converterParaMaiusculo(frutas));