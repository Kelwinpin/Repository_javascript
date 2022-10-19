const salaPy = [6, 7, 8, 8, 9 ,9 ,6 ,7 ,8]
const salaJS = [10, 4, 5, 6, 6, 6, 7, 8, 9]
const salaJava = [6, 7, 8, 8, 9]

function calcularMedia(notasDaSala) {
    const somaNotas = notasDaSala.reduce((acum, atual) => atual + acum, 0)

    return somaNotas/notasDaSala.length
}

console.log(`A média da sala de javascript é de: ${calcularMedia(salaJS)}`)
console.log(`A média da sala de python é de: ${calcularMedia(salaPy)}`)
console.log(`A média da sala de java é de: ${calcularMedia(salaJava)}`)