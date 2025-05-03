function retornaNomes(){
    var nome1 = window.document.getElementById('txtnome1').value;
    var nome2 = window.document.getElementById('txtnome2').value;
    var nome3 = window.document.getElementById('txtnome3').value;

    var resultado = window.document.getElementById('resultado');

    var nomesOrdenados = [nome1, nome2, nome3].sort();

    resultado.innerHTML = 
    `
    <p>
        Nomes ordernados:
        ${nomesOrdenados}
    </p>
    `

}