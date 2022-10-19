const listaNomes = ['João', 'Juan', 'Marin', 'Marcio', 'Maria', 'Igor', 
'Leo', 'Guillermo', 'Marlico', 'Erick']

const lista1 = listaNomes.slice(0, listaNomes.length/2);
const lista2 = listaNomes.slice(listaNomes.length/2);

console.log(`A sala 1 terá os alunos ${lista1} \n`);
console.log(`A sala 2 terá os alunos ${lista2}`);

lista1.splice(1,1, 'Kelwin')

console.log(lista1);

const sala = lista1.concat(lista2);

console.log(sala);

const notas =[10, 7, 8, 9, 9]

let notasEalunos = [lista1, notas]
console.log(notasEalunos[0][0]+'sua nota é '+notasEalunos[1][0]);