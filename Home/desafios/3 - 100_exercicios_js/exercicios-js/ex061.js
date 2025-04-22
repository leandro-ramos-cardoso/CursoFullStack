// 61 - Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo array onde cada string tenha a primeira e a última letra em maiúscula. Utilize a função `toUpperCase()` para converter as letras.

const palavras = ["javascript", "python", "java", "eu", "i"];

function converteMaiusculo(palavras) {
    // return palavras.map(i => {
    //     if(i.length < 2) {
    //         return i.toLowerCase();
    //     }
    
    //     const primeiraLetra = i[0].toUpperCase();
    //     const meioLetras = i.slice(1, -1);
    //     const ultimaLetra = i[i.length - 1].toUpperCase();
    //     return primeiraLetra + meioLetras + ultimaLetra;
    // });
    return palavras.map((i) => i[0].toUpperCase() + i.slice(1, -1) + (i[i.length - 1] || "").toUpperCase()); 

}

console.log(converteMaiusculo(palavras));