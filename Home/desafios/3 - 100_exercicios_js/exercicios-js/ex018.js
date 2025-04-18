const numeros = [34, 566, 1300, 15];

function encontrarMaiorNumero(numeros) {
    return Math.max(...numeros);
}

console.log (`
==================================
           \x1b[1m\x1b[33mMAIOR NÚMERO\x1b[0m
==================================
        `);
console.log(encontrarMaiorNumero(numeros));