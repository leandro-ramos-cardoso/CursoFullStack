const numeros = [6, 8, 10, 22];

// Usando o MAP - Retorna um novo array, com a mesma quantidade de elementos, transformando cada item conforme a função fornecida.
console.log(`
======================
    \x1b[1m\x1b[33m* Resultados *\x1b[0m
======================
`);
console.log(`Map -> [${numeros.map((i) => i * 2)}]`);

// Usando o FILTER - Retorna um novo array contendo apenas os itens que passam em uma determinada condição (regra).
console.log(`Filter -> [${numeros.filter((i) => i >= 10)}]`);

// Usando o REDUCE - Reduz o array a um UNICO valor.
console.log(`Reduce -> [${numeros.reduce((acc, i) => acc + i)}]`);