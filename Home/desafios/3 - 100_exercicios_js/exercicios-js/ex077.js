// 77 - Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo array onde cada string tenha todas as letras em maiúscula e invertida.

const diasSemana = ["segunda", "terca", "quarta", "quinta", "sexta"];

function converteMaiusculaInvertida(diasSemana) {
    return diasSemana.map((i) => i.toUpperCase().split("").reverse().join(""));
}


console.log(converteMaiusculaInvertida(diasSemana))