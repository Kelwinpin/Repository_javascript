const nomes = ['Maria', 'John', 'Marcos', 'Pedro']
const notas = [9, 4.5, 6, 7]

const reprovados = nomes.filter((nome, indice) => notas[indice] < 6)

console.log(`Reprovados: ${reprovados}`)