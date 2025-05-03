function calculaTemperaturas() {
    // Pegando as quatro temps digitadas pelo usuário
    let temp1 = parseFloat(window.document.getElementById('txtp').value);
    let temp2 = parseFloat(window.document.getElementById('txts').value);
    let temp3 = parseFloat(window.document.getElementById('txtt').value);
    let media = Number((temp1 + temp2 + temp3 )/3).toFixed(1);

    let maior = Math.max(temp1, temp2, temp3);
    let menor = Math.min(temp1, temp2, temp3);

    var resultado = window.document.getElementById('resultado');

    resultado.innerHTML = 
    `
    <p><strong>Média:</strong> ${media}</p>
    <p><strong>Maior:</strong> ${maior}</p>
    <p><strong>Menor:</strong> ${menor}</p>
    `;
}