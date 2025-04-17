// 5 - Crie um script que contenha duas funções, uma usando a sintaxe tradicional e outra usando arrow function. Ambas as funções devem receber um parâmetro carreira e retornar uma string concatenada usando template literals `${var}`. Retorno: "Meu objetivo de carreira é me tornar um [parametro carreira]".

const carreira = "Desenvolvedor Frontend";

function exibirObjetivoCarreira(carreira) {
    return (`Meu objetivo de carreira é me tornar um ${carreira}.`);
}

const exibirObjetivoCarreira2 = (carreira) => {
    return (`Meu objetivo de carreira é me tornar um ${carreira}.`);
}

console.log(exibirObjetivoCarreira(carreira));
console.log(exibirObjetivoCarreira2(carreira));


console.table([
    { Nome: 'Manuela', Sobrenome: 'Medeiros Cardoso', CPF: '020.111.234-22' }
  ]);
  
console.table(
    [
        {
            Function: `${exibirObjetivoCarreira(carreira)}`,
            Arrow_Function: `${exibirObjetivoCarreira2(carreira)}`
        }
    ]
)

console.log(`
    ===============================
     Objetivo de Carreira
    ===============================
     Function:        ${exibirObjetivoCarreira(carreira)}
     Arrow_Function:  ${exibirObjetivoCarreira2(carreira)}
    `);