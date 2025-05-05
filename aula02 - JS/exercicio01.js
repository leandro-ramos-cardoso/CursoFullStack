// Escopo GLOBAL - Acessivel em qualquer ponto do código
const cpf = "123.566.444-00";
var nome = "Leandro";

function exibirSobreNome () {
    // let - usado sempre dentro do escopo. (ESCOPO LOCAL - Só acessivel aqui)
    let sobreNome = "Ramos Cardoso";
    return sobreNome;
}

console.log(nome);
console.log(exibirSobreNome());
console.log(cpf);

// Concatenando as variaveis
console.log(`O nome é: ${nome}. O sobrenome é: ${exibirSobreNome()}. O cpf é: ${cpf}.`);