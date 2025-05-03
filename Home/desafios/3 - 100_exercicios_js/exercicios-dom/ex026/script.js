function contaPalavra(){
    var contagem = window.document.getElementById('txtfrase').value;
    var resultado = window.document.getElementById('resultado');

    resultado.innerHTML = 
    `
    ${contagem.split(' ').length}
    `
}