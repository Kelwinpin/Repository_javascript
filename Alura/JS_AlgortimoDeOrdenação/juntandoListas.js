const {edFolha, edGalho} = require('./listaLivros2');

function juntaListas(lista1, lista2){
    let pos1 = 0
    let pos2 = 0

    let listaConcats = []

   

    while(pos1 < lista1.length && pos2 < lista2.length){ 
        let produtoLista1 = lista1[pos1]
        let produtoLista2 = lista2[pos2]

        if(produtoLista1.preco < produtoLista2.preco){
            listaConcats.push(produtoLista1)
            pos1++
        }else{
            listaConcats.push(produtoLista2)
            pos2++
        }
    }

    while(pos1 < lista1.length){
        listaConcats.push(lista1[pos1])
        pos1++
    }

    while(pos2 < lista2.length){
        listaConcats.push(lista2[pos2])
        pos2++
    }
    return listaConcats
}

console.log(juntaListas(edFolha, edGalho))