// Crie um script que combine o uso de objetos literais, arrays e cálculos simples para armazenar e manipular informações pessoais e acadêmicas de uma pessoa. O script deve realizar as seguintes tarefas:

// ○ nome: O nome do aluno.
// ○ cpf: O CPF do aluno.
// ○ cidade: A cidade onde o aluno mora.
// ○ notas: Um array com 4 notas do aluno.

// ● Imprimir o nome, CPF e cidade do aluno.
// ● Imprimir cada uma das notas do array notas

// ● Calcular a média das notas do aluno e imprimir
// ● Selecionar uma das notas aleatoriamente, convertê-la
// de uma escala de 0-10 para uma escala de 0-100
// ○ nota convertida = nota × 10
// ● Utilize a sintaxe notas[Math.floor(Math.random() *
// notas.length)] para selecionar uma nota aleatória do
// array.
// ● Utilize template literals para a concatenação de

let aluno = {
    nome: "Fulano de Tal",
    cpf: "090.344.555-09",
    cidade: "João Pessoa",
    notas: [10.0, 9.7, 8.5, 7.0]
}

console.log("");
console.log(`Nome do aluno: ${aluno.nome}`);
console.log(`Notas: ${aluno.notas}`);

var media = (notas[0] + notas[1] + notas[2] + notas[3])/notas.length;
console (media);