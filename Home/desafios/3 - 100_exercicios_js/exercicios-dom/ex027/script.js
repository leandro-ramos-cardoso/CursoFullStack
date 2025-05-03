function binarioParaDecimal() {
    var numero = window.document.getElementById('txtnumero').value; // Captura o valor do input
    var resultado = window.document.getElementById('resultado');

    // Validação: Verifica se o número é binário
    if (!/^[01]+$/.test(numero)) {
        resultado.innerHTML = `<p>Por favor, insira um número binário válido (apenas 0 e 1).</p>`;
        return;
    }

    let decimal = 0;
    let expoente = 0;

    // Converte o binário para decimal
    for (let i = numero.length - 1; i >= 0; i--) {
        let digito = Number(numero[i]);
        decimal += digito * Math.pow(2, expoente);
        expoente++;
    }

    // Exibe o resultado
    resultado.innerHTML = `<p>O número decimal é: ${decimal}</p>`;
}