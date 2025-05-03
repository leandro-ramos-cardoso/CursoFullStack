function calculaJuros(){
    var jurosInserido = parseFloat(window.document.getElementById('txtjuros').value);
    var resultado = window.document.getElementById('resultado');

    var tempoNecessarioDobrar = (Math.log(2))/(Math.log((1 + jurosInserido)));

    // Separa a parte inteira (anos) e a parte decimal (meses)
    var anos = Math.floor(tempoNecessarioDobrar);
    var meses = Math.round((tempoNecessarioDobrar - anos) * 12);

    resultado.innerHTML = 
    `
    <p>Tempo necessário: ${anos} anos e ${meses} meses</p>
    `
}
