import chalk from "chalk";

function extraiLinks(arrLinks){
    return arrLinks.map((objetoLink)=> Object.values(objetoLink))
}

async function checaStatus(listaURLs){
    const arrStatus = await Promise .all(
        
        listaURLs.map(async (url)=>{
            try{
                const response = await fetch(url)
                return response.status;
            }catch(erro){
                return manejaErros(erro);
            }
        })
    )

    return arrStatus;
}

function manejaErros(erro){
    if(erro.cause.code === 'ENOTFOUND'){
        return 'link não encontrdo'
    }else{
        return 'ocorreu algum erro'
    }
}

async function listaValidada(listaDeLinks){
     const links =  extraiLinks(listaDeLinks);
     const status = await checaStatus(links);
     return listaDeLinks.map((objeto, indice)=>({
        ...objeto,
        status: status[indice]
     })); 
}

export default listaValidada;