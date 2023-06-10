function CalcMedia(){

var num1 = parseFloat(document.getElementById('num1').value);
var num2 = parseFloat(document.getElementById('num2').value);
var num3 = parseFloat(document.getElementById('num3').value);

var peso1 = parseFloat(document.getElementById('peso1').value);
var peso2 = parseFloat(document.getElementById('peso2').value);
var peso3 = parseFloat(document.getElementById('peso3').value);


var result = (num1 * peso1 + num2 * peso2+ num3 * peso3)/(peso1 + peso2 + peso3)

document.getElementById('result').value = result.toFixed(2);

}



console.log(result)

