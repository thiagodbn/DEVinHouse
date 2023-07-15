document.getElementById("btn-sair").addEventListener("click", sairLogin);

function sairLogin(event) {
    event.preventDefault();

  // Limpa os dados do usuário do localStorage
  localStorage.removeItem('dados_usuario');

    window.location.href = 'login.html';
}

let dadosUsuario = JSON.parse(localStorage.getItem('dados_usuario'));

if (dadosUsuario === null){
    alert("USUARIO NÃO LOGADO")
    window.location.href = 'login.html';
}
console.log('Nome do usuário:', dadosUsuario.nome);