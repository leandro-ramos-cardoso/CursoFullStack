function converteTemperatura() {
    let temp = parseFloat(window.document.getElementById('txtp').value);
    let kelvin = temp + 273.15;
    let fahrenheit = (temp * 9/5) + 32;

    var resultado = window.document.getElementById('resultado');

    resultado.innerHTML = 
    `
    <p>Temperatura Selecionada: ${temp}°C</p>
    <p>Kelvin: ${kelvin} K</p>
    <p>Fahrenheit: ${fahrenheit}°F</p>
    `;
}