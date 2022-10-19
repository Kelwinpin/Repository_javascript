const livros = require('./listaLivros');

function menorValor(arr, posInicial){
    let maisBarato = posInicial

    for(let i = posInicial;i < arr.length;i++){

        if(arr[i].preco < arr[maisBarato].preco){
            maisBarato = i
        } 
    }
    return maisBarato;
}

module.exports = menorValor;