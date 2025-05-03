var notas = [8.9, 7.5, 9.5];

console.log(`A primeira nota é: ${notas[0]}`);
console.log(`A segunda nota é: ${notas[1]}`);
console.log(`A terceira nota é: ${notas[2]}`);

const media = ((notas[0] + notas[1] + notas[2]) / notas.length).toFixed(1);

if (media >= 7) {
    console.log(`O aluno esta APROVADO com média ${media}`);
} else {
    console.log(`O aluno esta REPROVADO com média ${media}`);
}

// Refazer com media definida no inicio