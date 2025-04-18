const numero = [10, 55, 109, 3, 1];

function encontrarMenorNumero(numero) {
    return Math.min(...numero);
}

console.log(encontrarMenorNumero(numero));