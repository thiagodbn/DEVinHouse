const alunos = [{
    nome: 'Pedro',
    nota1: 7,
    nota2: 5

},{
    nome: 'Jose',
    nota1: 2,
    nota2: 6

},{
    nome: 'Maria',
    nota1: 7,
    nota2: 10

},{
    nome: 'João',
    nota1: 2,
    nota2: 3

},{
    nome: 'Julia',
    nota1: 7,
    nota2: 8

},{
    nome: 'Magali',
    nota1: 9,
    nota2: 10

},

]


var AlunosMedia = alunos.map(aluno => {
var somaNotas = aluno.nota1 + aluno.nota2;

var alumedia = {
    nome: aluno.nome,
    media: somaNotas / 2
  };
return alumedia})

console.log(AlunosMedia)


// ordenando da menor media para maior
AlunosMedia.sort(function(a, b){
    if (a.media < b.media){
        return -1;
    } else{
        return true
    }
});

console.log(AlunosMedia)



