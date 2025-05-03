
function fatorial() {

  var numero = window.document.getElementById('txtnum');
  var resultadoF = window.document.getElementById('resultado');

  var n = Number(numero.value);

    let resultado = 1;
    for (let i = 1; i <= n; i++) {
      resultado *= i;
    }

    resultadoF.innerHTML = `O fatorial de ${n} é ${resultado}.`
}
  