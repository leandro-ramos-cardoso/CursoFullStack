function numerosPrimos(){

    var valorInserido = window.document.getElementById('txtvalor').value;
    var resultado = window.document.getElementById('resultado');

    for (let i = 2; i <= 10; i++) { 
        let ehPrimo = true;
    
        for (let j = 2; j < i; j++) { 
            if (i % j === 0) {
                ehPrimo = false;
                break; 
            }
        }
    
        if (ehPrimo) {
            resultado.innerHTML += `${i},`
        }
    }
    
}