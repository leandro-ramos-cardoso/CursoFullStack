const numeros = [1, 2, 3, 5];

function elevaAoQuadrado(numeros) {
    return numeros.map((i) => Math.pow(i, 2));
}

console.log(`
======================
\x1b[1m\x1b[33m* Lista de números *\x1b[0m
======================
`);
console.log(numeros);
    
console.log(`
=====================================
  \x1b[1m\x1b[33m* Números elevados ao quadrado *\x1b[0m
=====================================
`);
console.log(elevaAoQuadrado(numeros));

