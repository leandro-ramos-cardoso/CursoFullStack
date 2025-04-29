function calcularTabuada () {

    var num = Number(window.document.getElementById('txtnum').value);
    var resultado = window.document.getElementById('resultado');

    // Limpando para não acumular em tela
    resultado.innerHTML = '';

    if (num == '') {
        resultado.innerHTML = `[ERRO] - Campo vazio, impossivel calcular`;
    } else {
        for (var n = 1; n < 11; n++){
            resultado.innerHTML += `${num} x ${n} = ${num*n} <br>`;
        }
    } 
}