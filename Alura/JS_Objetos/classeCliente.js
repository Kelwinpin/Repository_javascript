class Cliente{
    constructor(nome,email,cpf,saldo){
        this.nome = nome;
        this.email = email;
        this.cpf = cpf;
        this.saldo = saldo;
    }

    depositar(valor){
        this.saldo += valor;
    }

    exibirSaldo(){
        console.log(this.saldo)
    }
}

class ClientePoupanca extends Cliente {
    constructor(nome, email, cpf, saldo, saldoPoupanca){
        super(nome, email, cpf, saldo)
        this.saldoPoupanca = saldoPoupanca
    }

    depositarContaPoupanca(valor){
        this.saldoPoupanca += valor
    }
}

const kelwin = new ClientePoupanca("kelwin", 'k@email.com', "12345678900", 100, 300)

console.log(kelwin)