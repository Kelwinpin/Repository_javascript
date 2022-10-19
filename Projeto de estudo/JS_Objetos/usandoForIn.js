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

let relatorio = '';

for(let info in pessoa){
    if(typeof pessoa[info] === 'object' || typeof pessoa[info] === 'function'){
        continue;
    }else{
        relatorio += `\n ${info} ===> ${pessoa[info]} \n`;
    }
}

console.log(relatorio);