const matricula = 12345;
var nomeAluno = "Albert Einstein";

function exibirCurso() {
    let curso = "Sistemas de Informação";
    return (`O nome do aluno é ${nomeAluno} do curso ${curso} com matricula ${matricula}.`);
}

console.log(exibirCurso());