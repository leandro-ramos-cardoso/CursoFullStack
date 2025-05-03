function calcularFibonacci(){
    var numeroEscolhido = window.document.getElementById('txtnumero').value;
    var resultado = window.document.getElementById('resultado');

    if(numeroEscolhido == 0) {
        resultado.innerHTML = `Não tem como calcular a sequência Fibonacci de ${numeroEscolhido}`
    } else if (numeroEscolhido == 1) {
        resultado.innerHTML = `Não tem como calcular a sequência Fibonacci de ${numeroEscolhido}`
    } else if (numeroEscolhido >= 2) {
        var f = (numeroEscolhido - 1) + (numeroEscolhido - 2);
    }

    resultado.innerHTML = `${f}`
}