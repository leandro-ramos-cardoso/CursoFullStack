const numeros = [10,41,1,12,5,1];

let soma = 0;

for(i=0; i <numeros.length; i++){
    soma = soma + numeros[i];
}

let media = soma / numeros.length;


console.log(media)

console.log(numeros.sort((a, b) => a - b));

// MEDIANA - Sendo impar pega o numero do meio do array
if ((numeros.length % 2) !== 0) {
    const meio = Math.floor(numeros.length/2)
    const numeroMeio = numeros[meio];
    console.log(numeroMeio)
}

