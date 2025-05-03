function verificaNumeros(){
    // const numeros = [1,2,3,4,5,6]

    // const maior = Math.max(...numeros);
    // const menor = Math.min(...numeros);

    // console.log(maior);
    // console.log(menor);

    var numero1 = parseInt(window.document.getElementById('txtn1').value);
    var numero2 = parseInt(window.document.getElementById('txtn2').value);
    var numero3 = parseInt(window.document.getElementById('txtn3').value);
    var numero4 = parseInt(window.document.getElementById('txtn4').value);
    var numero5 = parseInt(window.document.getElementById('txtn5').value);

    var resultado = window.document.getElementById('resultado');

    const maior = Math.max(numero1, numero2, numero3, numero4, numero5);
    const menor = Math.min(numero1, numero2, numero3, numero4, numero5);

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
    <p>Maior: ${maior} 🔼</p> <br>
    <p>Menor: ${menor} 🔽</p>
    `
}