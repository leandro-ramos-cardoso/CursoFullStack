// 12 - Crie um script que declare uma variável let altura e atribua a ela um valor numérico. Em seguida, declare uma função que calcule a altura ao quadrado e imprima o resultado.
let altura = 1.75;

function calculoAltura() {
    let alturaAoQuadrado = altura * altura;
    return alturaAoQuadrado;
}

console.log(calculoAltura().toFixed(2));