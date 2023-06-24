class livro {
    constructor (titulo, autor, anoPublicacao){
        this.titulo =  titulo
        this.autor = autor
        this.anoPublicacao = anoPublicacao

}}


const Thiago = new livro ('nome', 'autor', 2000)
const livroDQ = new livro ('Dom Quixote', 'Miguel de Cervantes', 1605)
const livroCAS = new livro ('Cem Anos de Solidão', 'Gabriel García Márquez', 1967)
const livroOPP = new livro ('O Pequeno Príncipee', '(Antoine de Saint-Exupéry', 1943)


console.log(livroCAS)
