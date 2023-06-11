function Cadastro() {

    var aluno = {
        name: (document.getElementById('name').value),
        lastname:  (document.getElementById('lastname').value),
        age: parseFloat(document.getElementById('age').value)
    }

    
    const button = document.querySelector("#button-calc");
    var result = ('Seu nome é '+aluno.name +' ' + aluno.lastname + ' sua idade é ' + aluno.age)

    document.getElementById('result').value = result;


    console.log(aluno.name)
    console.log(aluno.age)
}

