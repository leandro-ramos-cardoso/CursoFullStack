var aluno = {
   nome: "Fulano de Tal",
   cpf: "000.000.00-11",
   cidade: "Manaus - AM",
   notas: [10, 5.0, 8, 7] 
}

console.log(`
==========================================
             \x1b[1m\x1b[33mDADOS ACADÊMICOS\x1b[0m
==========================================
    `);

console.log(`Nome: ${aluno.nome}`);
console.log(`CPF: ${aluno.cpf}`);
console.log(`Cidade: ${aluno.cidade}`);
console.log(`Notas: [${aluno.notas}]`);

function calculaMediaAluno() {
    let media = ((aluno.notas[0] + aluno.notas[1] + aluno.notas[2] + aluno.notas[3]) / aluno.notas.length).toFixed(1);
    return media;
}

console.log(`Média: ${calculaMediaAluno()}`);

function selecionaNotaAluno(notas) {
    const indice = Math.floor(Math.random() * notas.length);
    return notas[indice];
  }
  

const notaEscolhida = selecionaNotaAluno(aluno.notas);

function converteMediaEscala100(nota) {
    return Math.round(nota * 10);
}

const notaConvertida = converteMediaEscala100(calculaMediaAluno());

console.log(`Nota convertida: ${notaConvertida}\n`);

console.log(`
==========================================
            \x1b[1m\x1b[33mRESULTADO FINAL\x1b[0m
==========================================
        `);
    
console.log(`${aluno.nome} com CPF ${aluno.cpf} e\nresidente da cidade ${aluno.cidade} teve\nmédia de ${calculaMediaAluno()} com média convertida de\nvalor ${notaConvertida}.`);