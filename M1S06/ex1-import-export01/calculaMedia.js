
//let cnum = [5, 7, 8, 9, 6]


function CalcMedia(){
var cnum =valores.map(function(elemento){return Number(elemento)})
let soma2 = cnum.reduce((total, valor) => { return total+valor }, 0)
let media = soma2/cnum.length;

exibirElemento3(media)
}

function exibirElemento3(media) {
    let output3 = document.getElementById('result3');
    output3.value = media;
  }