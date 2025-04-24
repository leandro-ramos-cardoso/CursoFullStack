const frutas = ["Melancia", "Goiaba", "Banana"];

// for(let i = 0; i< frutas.length; i++) {
//     console.log(frutas[i]);
// }

function retornaLetraFrutas (frutas) {
    return frutas.map((i) => i);
}

console.log(retornaLetraFrutas(frutas));