const notas = [10, 1, 8];
const mediaAprovacao = 7;

console.log(`
==========================================
              \x1b[1m\x1b[33mNOTA ESCOLAR\x1b[0m
==========================================
        `);
console.log(`A primeira nota do aluno é: ${notas[0]}`);
console.log(`A segunda nota do aluno é: ${notas[1]}`);
console.log(`A terceira nota do aluno é: ${notas[2]}`);

function calculaMediaAluno() {
    let media = ((notas[0] + notas[1] + notas[2]))/notas.length;
    return media;
}

console.log(`A média do aluno é: ${calculaMediaAluno()}`);

console.log(`
==========================================
         \x1b[1m\x1b[33m** Resultado Final **\x1b[0m
==========================================
            `);

if (calculaMediaAluno() >= mediaAprovacao) {
    console.log(`O aluno está: \x1b[32mAPROVADO\x1b[0m`);
} else {
    console.log(`O aluno está: \x1b[31mREPROVADO\x1b[0m`);
}