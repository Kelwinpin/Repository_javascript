const livros = require('./listaLivros');

function insertSort(arr){
    for(let i = 0;i < arr.length;i++){
      let atual = i;
      while(atual > 0 && arr[atual].preco < arr[atual - 1].preco){
        let valAtual = arr[atual];
        let valAnterior = arr[atual - 1];

        arr[atual] = valAnterior;
        arr[atual - 1] = valAtual;

        atual --;
      }
    }
    console.log(arr)
}

insertSort(livros)