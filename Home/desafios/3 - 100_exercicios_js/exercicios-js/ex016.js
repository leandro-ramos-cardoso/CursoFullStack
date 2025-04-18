let numero = [1, 7 , 18, 20, 25];
var i = 0;
var soma = 0;

console.log (`
==========================================
             \x1b[1m\x1b[33mNúmeros do Array\x1b[0m
==========================================
`);
console.log (numero);

while (i < numero.length) {
    soma += numero[i];
    i++;
}

console.log (`
==========================================
              \x1b[1m\x1b[33mSOMA TOTAL\x1b[0m
==========================================
    `);

console.log(`A soma de todos os numéros é equivalente a ${soma}.`);
