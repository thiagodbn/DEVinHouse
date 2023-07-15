// Função para Logar
document.getElementById("btn-logar").addEventListener("click", validarLogin);

function validarLogin(event) {
    event.preventDefault();
  
    let usuariologin = document.getElementById("usuariologin").value;
    let usuariosArray = JSON.parse(usuarios);
    let senhalogin = document.getElementById("senhalogin").value;
  
    let senhaUsuarioEncontrada = usuariosArray.find(function(usuario) {
      return usuario.email === usuariologin && usuario.senha.toString() === senhalogin;
    });
  

    //Verificação se tem o usuario 
    if (senhaUsuarioEncontrada) {
      console.log(senhalogin);
      console.log(usuariologin);
      alert('SENHA E USUÁRIO VÁLIDOS!');
  
      // Armazena os dados do usuário no localStorage
      localStorage.setItem('dados_usuario', JSON.stringify({
        nome: senhaUsuarioEncontrada.nome,
        email: senhaUsuarioEncontrada.email
      }));

       // Redireciona para a página logado.html
    window.location.href = 'logado.html';

    } else {
      console.log('Senha ou Usuário não encontrado');
      alert('Senha ou Usuário não encontrado!');
    }
  }


//Botão criar usuario

document.getElementById("btn-criar").addEventListener("click", criarLogin);

function criarLogin(event) {
    event.preventDefault();

    window.location.href = 'cadastro.html';
}


/* CODIGOS DE CONSTRUÇÃO 
document.getElementById("btn-logar").addEventListener("click", function(event) {
    event.preventDefault();

    let usuariologin = document.getElementById("usuariologin").value;
    let usuariosArray = JSON.parse(usuarios);
    let senhalogin = document.getElementById("senhalogin").value;
     //console.log(senhalogin) //OK PUXOU OS VALORES string 
     
    

     let senhaUsuarioEncontrada = usuariosArray.find(function(usuario) {
        return usuario.email === usuariologin && usuario.senha.toString() === senhalogin;
    });
    
    if (senhaUsuarioEncontrada) {
        console.log(senhalogin);
        console.log(usuariologin)
        alert('SENHA E USUARIO VALIDA!');

        // Armazena os dados do usuário no localStorage
         localStorage.setItem('dados_usuario', JSON.stringify({
         nome: senhaUsuarioEncontrada.nome,
         email: senhaUsuarioEncontrada.email
        }));


    } else {
        console.log('Senha ou Usuario não encontrado');
        alert('Senha ou Usuario não encontrado!');
    }
     */
/*
    let senhaEncontrada = usuariosArray.find(function(usuario) {
        return  usuario.senha.toString() === senhalogin; //console.log(typeof usuario.senha) retornou> number
    });

    if (senhaEncontrada) {
        console.log(senhalogin);
        alert('SENHA VALIDA!');
        console.log('Senha encontrado');
    } else {
        console.log('Senha não encontrado');
        alert('Senha não encontrado!');
    }
*/

/*
    let usuarioEncontrado = usuariosArray.find(function(usuario) {
        return usuario.email === usuariologin;
    });
   
    if (usuarioEncontrado) {
        console.log(usuariologin);
        alert('EMAIL VALIDO!');
        console.log('Usuário encontrado');
    } else {
        console.log('Usuário não encontrado');
        alert('Usuário não encontrado!');
    }
*/

//});