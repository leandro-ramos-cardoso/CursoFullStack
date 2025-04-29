function soma() {
    var numeroEscolhido = window.document.getElementById('txtnum');
    var resultado = window.document.getElementById('resultado');

    var n = Number(numeroEscolhido.value);
    var soma = 0;

    if (n <= 0) {
        resultado.style.color = 'red';
        resultado.style.fontSize = '20pt'
        resultado.innerHTML = `Dados inválidos`;
    } else {
        resultado.style.color = '';
        for (var c = 1; c <= n; c++){
            soma += c;
        }

        resultado.style.fontSize = '20pt'
        resultado.innerHTML = `A soma de 1 até ${n} vale ${soma}.`;
    }

    
}





// console.log(`A soma de 1 até ${n} vale ${soma}`);