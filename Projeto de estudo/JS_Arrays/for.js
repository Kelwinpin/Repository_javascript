const numbers = [10, 8.5, 6, 7.5];
let somaNotas = 0;

for (let i = 0; i < numbers.length; i++) {
   somaNotas += numbers[i];
}

let media = somaNotas/numbers.length;

console.log(media);
