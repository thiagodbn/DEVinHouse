//Botão Voltar
document.getElementById("btn-voltar-login").addEventListener("click", voltarLogin);

function voltarLogin(event) {
    event.preventDefault();

    window.location.href = 'login.html';
}


// Cadastro novo usuario

document.getElementById("btn-criar-login").addEventListener("click", criarConta);

function criarConta(event) {
    event.preventDefault();
  
    let criarnovonome = document.getElementById("nome-cadatro").value;
    let criarnovoemail = document.getElementById("new-usuario-login").value;
    let criarnovasenha = document.getElementById("new-senha-login").value;
    let verificarnovasenha =document.getElementById("new-confirma-senha").value;
    let usuariosArray = JSON.parse(usuarios);

   //console.log(criarnovonome, criarnovoemail, criarnovasenha, verificarnovasenha) OK
    
//verificar se existe email cadastrado
let criarUsuarioEncontrado = usuariosArray.find(function(usuario) {
      return usuario.email === criarnovoemail;
    });

if (criarUsuarioEncontrado) {
    console.log(criarnovoemail);
    
    alert('Esse email já está sendo utilizado!');
} else{
// verificar se senha igual confirma senha
if(criarnovasenha === verificarnovasenha) {
    console.log("senhas iguais")
    console.log(`antes de criar ${usuarios}`)
    let novoUsuario = {
        nome: criarnovonome,
        email: criarnovoemail,
        senha: criarnovasenha
    }
    usuariosArray.push(novoUsuario)
    usuarios = JSON.stringify(usuariosArray);
    console.log(`depois de criar ${usuarios}`)
} else {
    alert('Senha errada!');
}}}

