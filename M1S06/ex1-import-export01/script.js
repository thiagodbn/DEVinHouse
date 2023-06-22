
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
     
    const resultado = num.reduce((total, quantidade) => total + parseFloat(quantidade), 0);
    exibirElemento(resultado)

}

function exibirElemento() {
    const output2 = document.getElementById('result1');
    output2.value = resultado;
  }

    
