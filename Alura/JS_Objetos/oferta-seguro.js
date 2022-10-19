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

function oferecerSeguro(obj) {
    const propsObject = Object.keys(obj);
    if (propsObject.includes('dependente')){
        console.log(`Oferecer seguro de vida para ${obj.nome}`);
    }
}

oferecerSeguro(pessoa);
console.log(Object.values(pessoa));
console.log(Object.entries(pessoa));