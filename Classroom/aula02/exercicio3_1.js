const temperaturasC = [35, 30, 29, 31];

// Imprimindo todas as temperaturas
console.log(`As temperaturas armazenadas são: ${temperaturasC}`);

// Escolhe de forma aleatoria uma temperatura
const escolhaTemperatura = temperaturasC[Math.floor(Math.random() * temperaturasC.length)];

console.log(`A temperatura aleatoria foi: ${escolhaTemperatura}`);

// Convertendo para Fahrenheit
const temperaturasF = (escolhaTemperatura * 9/5) + 32;

console.log(temperaturasF);
