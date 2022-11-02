const listaLivros = require('./array')

function buscar(array,  de, ate, valDesejado){
    let meio = Math.floor((de + ate) / 2)
    const atual = array[meio]

    if(de > ate){
        return -1;
    }

    if (valDesejado === atual.preco) {
        return meio;
    }

    if (valDesejado < atual.preco) {
        return buscar(array, de, meio - 1, valDesejado);
    }

    if (valDesejado > atual.preco) {
        return buscar(array, meio + 1, ate, valDesejado);
    }
}

console.log(buscar(listaLivros, 0, listaLivros.length - 1, 2))
