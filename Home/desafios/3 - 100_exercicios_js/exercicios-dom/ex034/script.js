function mudaPalavra() {
    var frase = window.document.getElementById('txtfrase').value; 
    var resultado = window.document.getElementById('resultado');

    frase = frase.replace(/rato/g, 'teste');

    resultado.innerHTML = `<p>${frase}</p>`;
}