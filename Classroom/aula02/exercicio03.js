const notas = [10.0, 9.5, 4.7];

console.log("");
console.log(`A primeira nota é: ${notas[0]}`);
console.log(`A segunda nota é: ${notas[1]}`);
console.log(`A terceira nota é: ${notas[2]}`);
console.log("");

var media = (notas[0] + notas[1] + notas[2])/notas.length;

console.log(`A media do aluno é ${media.toFixed(1)}`);