const user={
    nome: 'Kelwin',
    email: 'k@k.com',
    role: 'estudante',
    exibirInfo: function(){
        console.log(this.nome, this.email)
    }
}


const adm ={
    nome:'Gui',
    email:'g@g.com',
    role:'admin',
    criarCurso: function(){
        console.log('Curso criado com sucesso !!!')
    }
}

Object.setPrototypeOf(adm, user)

adm.exibirInfo();