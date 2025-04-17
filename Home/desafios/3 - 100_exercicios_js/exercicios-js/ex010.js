// 10 - Refaça o exercício anterior utilizando `.map()`. Para criar um array com números de 1 a 100:
// ```js
// const numeros = Array.from({ length: 100 }, (_, index) => index + 1);
// ```

// const numeros = [1, 2, 3, 4, 5];

// const dobrados = numeros.map(num => num * 2);

// console.log(dobrados);  // [2, 4, 6, 8, 10]

const numeros = Array.from({ length: 100 }, (_, index) => index + 1);

// const multiploDe3 = numeros.map(num % 3 == 0);

console.log(numeros);