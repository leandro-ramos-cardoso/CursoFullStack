function contarCedulas(){
    var valorSaque = parseInt(window.document.getElementById('txtvalor').value);
    var resultado = window.document.getElementById('resultado');
    var valorMinimo = 5;

    if(valorSaque < valorMinimo) {
        resultado.innerHTML = `O valor mínimo para saque é de R$ 5,00`
    }

    switch (valorSaque){
        case 5:
            resultado.innerHTML = `Você sacou ${valorSaque}, totalizando 1 nota de R$ 5,00`
    }

    // resultado.innerHTML = `Você sacou R$ ${valorSaque}`
}