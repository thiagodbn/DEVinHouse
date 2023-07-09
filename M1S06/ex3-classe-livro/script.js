class livro {
    constructor (titulo, autor, anoPublicacao){
        this.titulo =  titulo
        this.autor = autor
        this.anoPublicacao = anoPublicacao

}
obterInformacao(){
    console.log(`Informações sobre o Livro:`)
    console.log(`O titulo do livro é: ${this.titulo}`)
    console.log(`O autor é: ${this.autor}`)
    console.log(`foi publicado em : ` + this.anoPublicacao)

}
}


const Thiago = new livro ('nome', 'autor', 2000)
const livroDQ = new livro ('Dom Quixote', 'Miguel de Cervantes', 1605)
const livroCAS = new livro ('Cem Anos de Solidão', 'Gabriel García Márquez', 1967)
const livroOPP = new livro ('O Pequeno Príncipee', '(Antoine de Saint-Exupéry', 1943)


livroDQ.obterInformacao()
livroCAS.obterInformacao()
livroOPP.obterInformacao()