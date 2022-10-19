const pessoa ={
    nome:'Kelwin',
    cpf:'00000001',
    idade:19,
    dependente:[{
    nome:'Ana',
    idade:'17',
    parentesco: 'prima'
    }]
}

console.log(pessoa)
pessoa.dependente.push({nome:'Maria', idade: 10, parentesco: 'irma'});

console.log(pessoa)

const maisNova = pessoa.dependente.filter(d => d.idade < 12)

console.log(maisNova)
console.log(maisNova[0].nome);
