// 14 - Crie um script que declare uma variável const base e atribua a ela um valor numérico. Declare uma função que calcule a área de um triângulo usando a base e uma altura fornecida como parâmetro e imprima o resultado.
const base = 5;

function calculaAreaTriangulo(base, altura) {
    let areaTriangulo = (base * altura) / 2; 
    return areaTriangulo;
}

console.log(calculaAreaTriangulo(base, 3));