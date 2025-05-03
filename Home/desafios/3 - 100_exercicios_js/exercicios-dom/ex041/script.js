function listarPrecos() {
    // Pegando as quatro precs digitadas pelo usuário
    let prec1 = parseFloat(window.document.getElementById('txtp').value);
    let prec2 = parseFloat(window.document.getElementById('txts').value);
    let prec3 = parseFloat(window.document.getElementById('txtt').value);
    let media = Number((prec1 + prec2 + prec3 )/3).toFixed(1);

    let maior = Math.max(prec1, prec2, prec3);
    let menor = Math.min(prec1, prec2, prec3);

    var resultado = window.document.getElementById('resultado');

    resultado.innerHTML = 
    `
    <p><strong>Média:</strong> ${media}</p>
    <p><strong>Maior:</strong> ${maior}</p>
    <p><strong>Menor:</strong> ${menor}</p>
    `;
}