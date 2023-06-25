
import {array} from './principal.js'

function verificaPar(){
var numPar = array.filter((element) => element % 2 === 0);

console.log("Os numeros pares do array são: "+numPar)
}

/*
function verificarImpar(){
    var numImpar = array.filter((element) => element % 2 !== 0);
    
    console.log(numImpar)

    }
*/

export{verificaPar}




  
