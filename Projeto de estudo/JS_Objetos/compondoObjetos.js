const pessoa ={
    nome:'Kelwin',
    cpf:'00000001',
    idade:19,
    dependente:{
    nome:'Sara',
    idade:'17',
    parentesco: 'prima'
    }
}

console.log(pessoa);

pessoa.dependente.nome = 'Ana Livia';

console.log(pessoa);