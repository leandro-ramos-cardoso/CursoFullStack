let numeroSorteado; 

function gerarNumero() {

    var numeroSorteado = Math.floor(Math.random() * 10);
    resultado.innerHTML = `${numeroSorteado}`;

    
}

function tentativaNumero(){
    var numeroEscolhido = window.document.getElementById('txtescolha');
    var resultado = window.document.getElementById('resultado');

    resultado.innerHTML = `${numeroSorteado}`;

    if (numeroEscolhido == numeroSorteado){
        alert('Acertou')
    }
}