const clientes = [
    {
        nome: 'André',
        cpf:'0000000001',
        dependentes:[{
            nome:'Sara',
            parentesco:'filha',
            dtaNasc: '31/10/2008'
        },
        {
            nome:'Samia',
            parentesco:'filha',
            dtaNasc:'04/01/2015'
        }],
    },
    {
        nome:'Juliana',
        cpf:'1111111110',
        dependentes:[{
            nome:'Sophia',
            parentesco:'filha',
            dtaNasc:'30/08/2020'
        }],
    }
]

const listaDependentes = [...clientes[0].dependentes, ...clientes[1].dependentes]

console.table(listaDependentes)
                                                                  