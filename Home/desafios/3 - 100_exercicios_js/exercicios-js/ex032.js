// 32 - Crie um script que declare um array de objetos, onde cada objeto representa um aluno e possui as propriedades `nome`, `idade` e `notas` (um array de números). Utilize a função `map()` para criar um novo array contendo apenas os nomes dos alunos. Imprima o novo array.
const alunos = [
    {
        nome: "Beltrano",
        idade: 17,
        notas: [7, 6.5, 7, 9]
    },
    {
        nome: "Maria",
        idade: 15,
        notas: [7.5, 7, 8, 9.5]
    }
]

console.log(alunos.map((i) => i.nome));