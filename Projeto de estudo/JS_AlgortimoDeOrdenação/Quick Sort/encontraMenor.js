const listaLivros = require('./array')

function encontrarMenores(array, pivo){

    let contMenores = 0 

    for(let i = 0;i < listaLivros.length;i++){
        if(pivo.preco > array[i].preco){
            contMenores++
        }
    }
    
    return trocarValores(array, array.indexOf(pivo), contMenores)
}

function trocarValores(array, pivo, contMenores){
    let itemMaior = array[pivo]
    let itemMenor = array[contMenores]

    array[pivo] = itemMenor
    array[contMenores] = itemMaior

    return array 
}

function divideNoPivo(array){
    let pivo = array[Math.floor(array.length/2)]
    let contMenor = 0
    encontrarMenores(array, pivo);

    for(i=0;i < array.length;i++){
        
        if( array[i].preco <= pivo.preco && array[i] != pivo){
            trocarValores(array, i, contMenor)
            contMenor++
        }
    }

    return array
}

console.log(divideNoPivo(listaLivros))
module.exports = trocarValores