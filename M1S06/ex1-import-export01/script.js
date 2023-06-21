//function CalcMedia(){

//var num1 = parseFloat(document.getElementById('num').value);
//var num2 = parseFloat(document.getElementById('num2').value);
//var num3 = parseFloat(document.getElementById('num3').value);
//const button = document.querySelector("#button-calc1");
//var result = (num1 + num2 + num3)/3
//document.getElementById('result1').value = result.toFixed(2);
//}
//console.log(result)
//console.log('óla mundo')



var valores = [];

function adicionarValor() {
  const input = document.getElementById('valorInput');
  var valor = input.value;
  

  if (valor !== '') {
    valores.push(valor);
    input.value = '';
    exibirArray();
    
  }
}

function resetValores() {
  valores = [];
  exibirArray();
  
}

function exibirArray() {
  const output = document.getElementById('arrayOutput');
  output.value = valores.join(', ');
  
}

function Somatorio(num){
    //const input = document.getElementById('arrayOutput');
    
    const resultado = num.reduce((total, quantidade) => total + parseFloat(quantidade), 0);
    exibirElemento(resultado)

}

function exibirElemento() {
    const output2 = document.getElementById('result1');
    output2.value = resultado;
  }

    
