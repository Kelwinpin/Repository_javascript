const notas = [10, 9, 8, 7, 6]

console.log(notas)

const notasUpdates = notas.map(nota => nota == 10 ? nota : ++nota)

console.log(notasUpdates)
