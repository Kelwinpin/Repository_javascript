function Cliente(nome, cpf, email, saldo){
    this.nome = nome
    this.saldo = saldo
    this.cpf = cpf
    this.email = email
    this.depositar = function (valor){
        this.saldo += valor
    }
}

function ClientePoupanca(nome, cpf, email, saldo, saldoPoup){
    Cliente.call(this, nome, cpf, email, saldo);
    this.saldoPoup = saldoPoup
}

const pedro = new ClientePoupanca('Pedro', '123456789-00', 'Pedro@gmail.com', 100, 200);

console.table(pedro)

ClientePoupanca.prototype.depositarPoup = function(valor){
    this.saldoPoup += valor
}

pedro.depositarPoup(50)

console.log(pedro.saldoPoup)