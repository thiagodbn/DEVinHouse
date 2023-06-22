
//et num = [2, 5, 8, 10, 6, 4];
//const soma = num.reduce((total, quantidade) => total+quantidade);
//console.log(soma);

//const button = document.querySelector("#button-calc1");


    let script = valores

var num = script
function Somatorio(){
    //const input = document.getElementById('arrayOutput');
    
    const resultado = valores.reduce((total, quantidade) => total + parseFloat(quantidade), 0);
    exibirElemento(resultado)

}

//console.log(somatorio());


//document.getElementById('result1').value = somatorio();






function exibirElemento(resultado) {
    let output = document.getElementById('result1');
    output.value = resultado;
  }