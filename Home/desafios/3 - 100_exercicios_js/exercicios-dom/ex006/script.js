// const nomes2 = ['João', 'Manuel', 'José'];

// let maior = nomes[0];
// let menor = nomes [0];

// for (let i = 0; i < nomes.length; i++){
//     if (nomes[i] > maior) {
//         maior = nomes[i];
//     } else if (nomes[i] < menor){
//         menor = nomes[i];
//     }
// }

// console.log(`Maior: ${maior}`);
// console.log(`Menor: ${menor}`);

const nomes = [];
function verificarTamanhoNome (){
    const nome1 = window.document.getElementById('txtname1');
    const nome2 = window.document.getElementById('txtname2');
    const nome3 = window.document.getElementById('txtname3');
    const resultado = window.document.getElementById('resultado');

    // Limpa o array antes de adicionar novos nomes
    nomes.length = 0;

    const n1 = nome1.value;
    const n2 = nome2.value;
    const n3 = nome3.value;

    // Inserindo no array os nomes
    nomes.push(n1, n2, n3);

    var maior = nomes[0];
    var menor = nomes[0];

    resultado.innerHTML = `${nomes}`;

    for (let i = 1; i < nomes.length; i++){
            if (nomes[i].length > maior.length) {
                maior = nomes[i];
            } else if (nomes[i].length < menor.length){
                menor = nomes[i];
            }
    }


    resultado.innerHTML =
    `
        <p>RESULTADO<p>
        <p><strong>Maior nome:</strong> ${maior}</p>
        <p><strong>Menor nome:</strong> ${menor}</p>
    `
    
    nome1.value = '';
    nome2.value = '';
    nome3.value = '';
}