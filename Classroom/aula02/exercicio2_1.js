const carreira = "Desenvolver Frontend";

function exibirCarreira (nomeCarreira) {
    return `Meu objetivo de carreira é me tornar um ${carreira}.`;
}

const exibirCarreira2 = (nomeCarreira) => {
    return `Meu objetivo de carreira é me tornar um ${carreira}.`;
}

console.log("");
console.log("Com Function");
console.log(exibirCarreira(carreira));
console.log("");
console.log("Com Arrow Function");
console.log(exibirCarreira2(carreira));
console.log("");