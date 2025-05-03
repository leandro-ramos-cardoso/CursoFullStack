function calculoIdade() {
    var anoAtual = new Date().getFullYear();
    var anoNascimento = parseInt(window.document.getElementById('txtanonasc').value);
    var resultado = window.document.getElementById('resultado');
    var idade = anoAtual-anoNascimento;


    if (!anoNascimento) {
        alert('Por favor, insira uma data válida.');
        return;
    }

    
    resultado.style.color = "purple";
    resultado.innerHTML = 
    `
    <p><strong>Você tem ${idade} anos.</strong></p>
    `

}