// 33 - Crie um script que declare um array de objetos, onde cada objeto representa um aluno e possui as propriedades `nome`, `idade` e `notas` (um array de números). Utilize a função `filter()` para criar um novo array contendo apenas os alunos com idade maior ou igual a 18 anos. Imprima o novo array.
const alunos = [
    {
        nome: "Fulano de Tal",
        idade: 25,
        notas: [7, 8, 9.5, 10]
    },
    {
        nome: "Betrano de Tal",
        idade: 17,
        notas: [9, 5, 8.5, 7]
    }
]

console.log(alunos.filter((i) => i.idade >= 18));