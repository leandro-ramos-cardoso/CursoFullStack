// var frase = 'Jose é o farao'
// var letra = 'o'
// var cont = 0;

// for (var i = 0; i < frase.length; i++){
//     if (frase[i] == letra) {
//         cont++;
//     }
// }

// console.log(`A letra "${letra}" aparece ${cont} vezes.`)

function contaLetras() {
    var letraEscolhida = window.document.getElementById('txt').value;
    var resultado = window.document.getElementById('resultado');


    for(var cont = 0; cont < letraEscolhida.length; cont++) {
        if(letraEscolhida[cont] === letra){
            cont++;
        }
    }

    resultado.innerHTML = `${cont}`
}