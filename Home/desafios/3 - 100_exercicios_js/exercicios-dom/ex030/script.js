function votacao(){
    var candidato1 = window.document.getElementById('txtcand1').value;
    var candidato2 = window.document.getElementById('txtcand2').value;

    var resultado = window.document.getElementById('resultado');
    var candidatos = '';
    var candidatos = [candidato1, candidato2]

    resultado.innerHTML = `${candidatos}`
}