const pessoa ={
    nome:'Kelwin',
    cpf:'00000001',
    idade:19,
    dependente:[{
    nome:'Ana',
    idade:'17',
    parentesco: 'prima'
    },
    {nome:'Maria', 
    idade: 10, 
    parentesco: 'irma'
    }],
    saldo: 100,
    depositar:function(valor){
        this.saldo += valor;
    }
}

console.log(pessoa.saldo);
pessoa.depositar(500);
console.log(pessoa.saldo);

