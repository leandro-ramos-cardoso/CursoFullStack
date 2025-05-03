function calculaMediaNotas() {
    // Pegando as quatro notas digitadas pelo usuário
    let nota1 = parseFloat(window.document.getElementById('txtp').value);
    let nota2 = parseFloat(window.document.getElementById('txts').value);
    let nota3 = parseFloat(window.document.getElementById('txtt').value);
    let nota4 = parseFloat(window.document.getElementById('txtq').value);
    let media = Number((nota1 + nota2 + nota3 + nota4)/4).toFixed(1);

    let maior = Math.max(nota1, nota2, nota3, nota4);
    let menor = Math.min(nota1, nota2, nota3, nota4);

    var resultado = window.document.getElementById('resultado');

    resultado.innerHTML = 
    `
    <p><strong>Média ${media}</p></strong>
    <p><strong>Maior ${maior}</p></strong>
    <p><strong>Menor ${menor}</p></strong>
    `
}