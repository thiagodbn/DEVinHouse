
class veiculo {
    constructor(marca, ano){
        this.marca = marca
        this.ano = ano
    }
}
    class carro extends veiculo {
        constructor(marca, ano, portas){
        super(marca,ano);
        this.portas = portas;
    }

    obterDetalhe(){

        console.log('marca do carro '+this.marca)
        console.log('ano '+this.ano)
        console.log('tem '+this.portas+' portas')
    }
}


const fiesta = new carro (`ford`, 2020, 4)

fiesta.obterDetalhe()