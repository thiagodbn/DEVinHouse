function CalcMedia(){

var num1 = parseFloat(document.getElementById('num1').value);
var num2 = parseFloat(document.getElementById('num2').value);
var num3 = parseFloat(document.getElementById('num3').value);
const button = document.querySelector("#button-calc");
var result = (num1 + num2 + num3)/3

document.getElementById('result').value = result.toFixed(2);

}




console.log(result)
console.log('óla mundo')
