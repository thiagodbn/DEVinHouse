
import {array} from './principal.js'
//console.log(array)


var somaImpar = 0
    function SomaImpares(){
        var numImpar = array.filter((element) => element % 2 !== 0);
        var somaImpar = numImpar.reduce((total, quantidade) => total + parseFloat(quantidade), 0);
        //console.log(numImpar)
    console.log ("A soma dos numeros Impares do array é: "+somaImpar)
}


export{SomaImpares}



