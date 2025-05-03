function verificaPrimo() {
    var numero1 = parseInt(window.document.getElementById('txtnum1').value);
    var numero2 = parseInt(window.document.getElementById('txtnum2').value);
    var numero3 = parseInt(window.document.getElementById('txtnum3').value);
    var numero4 = parseInt(window.document.getElementById('txtnum4').value);
    var numero5 = parseInt(window.document.getElementById('txtnum5').value);
    var resultado = window.document.getElementById('resultado');

    var listaNumeros = [numero1, numero2, numero3, numero4, numero5];
    var numerosPrimos = [];

    for (let i = 0; i < listaNumeros.length; i++) {
        let numero = listaNumeros[i];
        if (ehPrimo(numero)) {
            numerosPrimos.push(numero);
        }
    }

    resultado.innerHTML = `Números primos: ${numerosPrimos.join(', ')}`;
}

function ehPrimo(numero) {
    if (numero <= 1) return false;
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) return false; 
    }
    return true;
}