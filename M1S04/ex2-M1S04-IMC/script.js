function CalcMedia() {

    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    
    const button = document.querySelector("#button-calc");
    var result = (num1 / (num2 * num2))

    document.getElementById('result').value = result.toFixed(2);

    var tabref = 'text'
    if (result < 18.5) {
        var tabref = 'baixo do peso'
    } else if (result >= 18.5 && result < 25) {
        var tabref = 'Peso normal'
    } else if (result >= 25 && result < 30) {
        var tabref = 'Sobrepeso'
    } else if (result >= 30 && result < 35) {
        var tabref = 'Obesidade grau 1'
    } else if (result >= 35 && result < 40) {
        var tabref = 'Obesidade grau 2'
    } else {
        var tabref = 'Obesidade grau 3'
    }

    document.getElementById('tab-result').value = tabref;

}







//Menos do que 18,5	Abaixo do peso
//Entre 18,5 e 24,9	Peso normal
//Entre 25 e 29,9	Sobrepeso
//Entre 30 e 34,9	Obesidade grau 1
//Entre 35 e 39,9	Obesidade grau 2
//Mais do que 40	Obesidade grau 3