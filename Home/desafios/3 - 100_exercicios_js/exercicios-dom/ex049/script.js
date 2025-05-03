function valorAbsoluto() {
    var numero = window.document.getElementById('txtnum').value;
    var resultado = window.document.getElementById('resultado');

    resultado.innerHTML =
    `
    O valor absoluto é igual a ${Math.abs(numero)}.
    `
}

