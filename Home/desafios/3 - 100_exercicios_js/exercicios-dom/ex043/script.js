function velocidadeMedia() {

    var distancia = window.document.getElementById('txtd').value;
    var tempo = window.document.getElementById('txtt').value;
    var velocidadeMedia = (distancia / tempo);
    var resultado = window.document.getElementById('resultado');

    resultado.innerHTML = `${velocidadeMedia} Km/h`
}