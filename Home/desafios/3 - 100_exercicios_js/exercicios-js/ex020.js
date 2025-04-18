const numero = [1, 2, 3, 4];

function calculaMedia (numero) {
    let media = (numero[0] + numero[1] + numero[2] + numero[3]) / numero.length;
    return media;
}

console.log(`A média entre os números vale ${calculaMedia(numero)}`);
