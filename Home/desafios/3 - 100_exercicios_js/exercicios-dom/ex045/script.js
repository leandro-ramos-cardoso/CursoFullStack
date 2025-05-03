function ordemNumeros() {
    let numero1 = window.document.getElementById('txtn1').value;
    let numero2 = window.document.getElementById('txtn2').value;
    let numero3 = window.document.getElementById('txtn3').value;
    let resultado = window.document.getElementById('resultado');

    var numeros = [numero1, numero2, numero3];
    var numerosOrdenados = numeros.sort((a, b) => a - b);

    resultado.innerHTML = `<p>Números ordenados: [${numerosOrdenados.join(', ')}]</p>`;

}