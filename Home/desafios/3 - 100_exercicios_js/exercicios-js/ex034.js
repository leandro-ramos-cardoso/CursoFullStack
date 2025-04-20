// 34 - Crie um script que declare um array de objetos, onde cada objeto representa um aluno e possui as propriedades `nome`, `idade` e `notas` (um array de números). Utilize a função `reduce()` para calcular a média das idades dos alunos.
const alunos = [
    {
        nome: "Mulan",
        idade: 20,
        notas: [7, 9, 8, 7.5]
    },
    {
        nome: "Bela",
        idade: 15,
        notas: [5, 9, 9.5, 10]
    }
]

function calcularMediaAluno() {
    const somaIdades = alunos.reduce((acc, alunos) => acc + alunos.idade, 0);
    return somaIdades / alunos.length;
}

console.log(`A média das idades dos alunos é ${calcularMediaAluno()}`);