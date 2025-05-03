function verificaNumeros(){

    var numero1 = parseInt(window.document.getElementById('txtn1').value);
    var numero2 = parseInt(window.document.getElementById('txtn2').value);
    var numero3 = parseInt(window.document.getElementById('txtn3').value);
    var numero4 = parseInt(window.document.getElementById('txtn4').value);
    var numero5 = parseInt(window.document.getElementById('txtn5').value);

    var numeros = [numero1,numero2,numero3,numero4,numero5];
    var ordemNumerica = numeros.toSorted();

    var resultado = window.document.getElementById('resultado');
    var resultado2 = window.document.getElementById('resultado2');

    resultado.style.background = '#FF3333';
    resultado.style.color = 'black';
    resultado.style.borderRadius = '20px';
    resultado.style.padding = '20px';
    resultado.style.marginBottom = '20px';
    resultado.style.width = '300px';
    resultado.style.margin = '0 auto';
    resultado.style.fontSize = '25px'
    resultado.style.backgroundColor = 'lightblue';


    resultado.innerHTML = 
    `
    <p>Números fora de ordem: ${numeros}</p>
    `

    resultado2.style.color = 'black';
    resultado2.style.borderRadius = '20px';
    resultado2.style.padding = '20px';
    resultado2.style.marginBottom = '20px';
    resultado2.style.width = '300px';
    resultado2.style.margin = '0 auto';
    resultado2.style.fontSize = '25px'
    resultado2.style.backgroundColor = '#53aecc';

    resultado2.innerHTML = 
    `
    <p>Números ordenados: ${ordemNumerica}</p>
    `
}