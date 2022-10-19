const alunos = ['João', 'Guilherme', 'Leonardo', 'Maria', 'Leticia', 'Bruno'];
const notas = [10, 10, 8, 6.5, 7, 8];

let nomesEnotas = [alunos, notas];

let encontrarAluno = (nome)=> {
    if(nomesEnotas[0].includes(nome)){
        i = nomesEnotas[0].indexOf(nome);
        return nomesEnotas[0][i] + ' sua nota é ' + nomesEnotas[1][i];
    }else{
        return 'Aluno não cadastrado';
    }
}
console.log(encontrarAluno('Bruno'));
