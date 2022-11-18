import fs from 'fs';
import chalk from "chalk";

function trataErro(erro){
    throw new Error(chalk.red(erro.code, "Não há arquivo no diretório"));
}

function pegaArquivo(caminhoArquivo){
    const encoding = 'utf-8'
    fs.readFile(caminhoArquivo, encoding, (erro, texto)=>{
        if(erro){
            trataErro(erro)
        }
        console.log(chalk.greenBright(texto))
    })
}

pegaArquivo('./')