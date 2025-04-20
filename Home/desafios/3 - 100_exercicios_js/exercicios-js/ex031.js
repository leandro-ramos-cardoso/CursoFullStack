// 31 - Crie um script que declare um array de objetos, onde cada objeto representa um aluno e possui as propriedades `nome`, `idade` e `notas` (um array de números). Utilize um loop `for` para imprimir o nome de cada aluno.
const alunos = [{
    nome: "Fulano",
    idade: 20,
    notas: [7, 8.5, 9, 10]
},
{
    nome: "Josefina",
    idade: 25,
    notas: [10, 6.7, 7, 8]
}];

for(let i = 0; i< alunos.length; i++) {
    console.log(alunos[i].nome);
}
