// Moeda	Cotação Comercial (R$)	Fonte
// Dólar Americano	R$ 5,68	Investing.com
// Euro	R$ 6,44	Investing.com
// Libra Esterlina	R$ 7,56	Wise

function converteMoedas() {
    var moeda = window.document.getElementById('txtval').value;
    var resultado = window.document.getElementById('resultado');

    var dolar = (moeda * 5.68);
    var euro = (moeda * 6.44);
    var libra = (moeda * 7.56);

    resultado.innerHTML = 
    `
    <p>O valor R$ ${moeda} vale em:</p>
    <p>Dolar -> U$ ${dolar}</p>
    <p>Euro -> € ${euro}</p>
    <p>Libra -> £ ${libra}</p>
    `
}