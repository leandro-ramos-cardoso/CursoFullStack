const numeros = [1, 2, 3, 5];

const soma = numeros.reduce((acc, i) => {
    return acc + i;
}, 0);

console.log(soma);