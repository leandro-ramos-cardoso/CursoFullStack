function verificarDivisores() {

    var numero = parseInt(window.document.getElementById('txtn1').value);
    var resultado = window.document.getElementById('resultado');

    var divisores = [];

    for(var i=1; i<= numero; i++){
        if(numero % i == 0){
            divisores.push(i);
        }
        
    }

    resultado.innerHTML = `${divisores}`;
}
