const cpf = "020.111.234-22";
var nome = "Manuela";

function exibirSobreNome() {
    let sobreNome = "Medeiros Cardoso";
    return sobreNome;
}

console.log(`
==========================================
             \x1b[1m\x1b[33mDADOS PESSOAIS\x1b[0m
==========================================
`);

console.log(`Nome: ${nome}`);
console.log(`Sobrenome: ${exibirSobreNome()}`);
console.log(`CPF: ${cpf}`);
console.log("");
console.log(`O nome completo é ${nome} ${exibirSobreNome()} com cpf de número ${cpf}.`);
  


