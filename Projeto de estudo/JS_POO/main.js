import Admin from './Admin.js';
import User from './User.js';

const adm = new Admin('kelwin', 'k@k.com', '2002/10/22')
console.log(adm)
console.log(adm.exibirInfo())
console.log(adm.criarCurso('React','96'))
console.log(adm.nome)