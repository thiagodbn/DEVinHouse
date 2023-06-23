//objeto

/*
class pessoa {
    constructor (cor,marca,ano,modelo){
        this.cor = cor;
        this.marca = marca;
        this.ano = ano;
        this.modelo = modelo;

    }
    Buzinar() {
        console.log(`beep beep do carro ${this.cor}`)
    }
}

const veiculopronto = new pessoa('azul','ford',2000,'new fiesta')
const veiculoduda = new pessoa('preto','honda',2020,'fit')
console.log(veiculopronto)
console.log(veiculoduda)
veiculoduda.Buzinar() */

class pessoa {
    constructor (nome, idade, genero, estadocivil, nacionalidade, profissao,){
        this.nome =  nome
        this.idade = idade
        this.genero = genero
        this.estadocivil = estadocivil
        this.nacionalidade = nacionalidade
        this.profissao = profissao
    }
    Acordar(){
        console.log(`${this.nome} acordou`)
    }
    Comer(){
        console.log(`${this.nome} está comendo`)
    }
    Dormir(){
        console.log(`${this.nome} foi dormir`)
    }
    Trabalhar(){
        if(this.idade<18){
            console.log(`${this.nome} foi estudar`)
        } else {
            console.log(`${this.nome} foi trabalhar`)
        }

    }

}

const Thiago = new pessoa ('Thiago', 28, 'Masculino', 'Casado', 'Brasileiro', 'Programador')

Thiago.Acordar()
Thiago.Comer()
Thiago.Dormir()
Thiago.Trabalhar()