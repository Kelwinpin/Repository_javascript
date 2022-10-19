function Cliente(nome, cpf, email, saldo){
    this.nome = nome
    this.saldo = saldo
    this.cpf = cpf
    this.email = email
    this.depositar = function (valor){
        this.saldo += valor
    }
}

const kelwin = new Cliente('kelwin', '123456789-00', 'kelwin@gmail.com', 500)

console.table(kelwin)