function verificaNumero(){
    var numeroEscolhido = parseInt(window.document.getElementById('txtnumero').value);
    var resultado = window.document.getElementById('resultado');

    resultado.innerHTML = ""; // Limpa o conteúdo anterior


    for(let i = 0; i <= numeroEscolhido; i ++){
        if(i % 2 == 0){
            resultado.innerHTML += 
            `<p>Par: ${i}</p>`
        }else{
            resultado.innerHTML += `<p>Impar: ${i}</p>`
        }
    }
}

