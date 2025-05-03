function calcularMDC() {

    var numero1 = window.document.getElementById('txtn1').value;
    var numero2 = window.document.getElementById('txtn2').value;
    var resultado = window.document.getElementById('resultado');

    while (numero2 !== 0) {
        let temp = numero2;
        numero2 = numero1 % numero2;
        numero1 = temp;
    }
        resultado.innerHTML = `MDC = ${numero1}`
        
    }

