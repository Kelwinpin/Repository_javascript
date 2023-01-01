import fs from 'fs';
import chalk from "chalk";

function extraiLinks(texto) {
    const regex = /\[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)/gm;
    const capturas = [...texto.matchAll(regex)];
    const resultados = capturas.map(captura => ({[captura[1]]: captura[2]}))
    return resultados.length !== 0 ? resultados : 'não a links no arquivo';
  }
  
function trataErro(erro){
    throw new Error(chalk.red(erro.code, "Não há arquivo no diretório"));
}

async function pegaArquivo(caminhoArquivo){
    try{
        const encoding = 'utf-8'
        const texto = await fs.promises.readFile(caminhoArquivo, encoding)
        return extraiLinks(texto);
    }catch(erro){
        trataErro(erro)
    }
}

/*function pegaArquivo(caminhoArquivo){
    const encoding = 'utf-8'
    fs.promises
    .readFile(caminhoArquivo, encoding)
    .then((texto)=>console.log(chalk.green(texto)))
    .catch(trataErro)
}*/

/*function pegaArquivo(caminhoArquivo){
    const encoding = 'utf-8'
    fs.readFile(caminhoArquivo, encoding, (erro, texto)=>{
        if(erro){
            trataErro(erro)
        }
        console.log(chalk.greenBright(texto))
    })
}*/

export default pegaArquivo;
