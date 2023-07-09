

function NovaCorTopFrame (newcolor){
    const elem = document.getElementById("top-frame-promo");
    elem.style.backgroundColor = newcolor;
}

//----------------------------------------------------------------------------------------




 //---------------------------------------------------------------------------------------- 
var cards = [
    { nome: 'MediHeal', descricao: 'Alívio para dores leves', preco: 'R$15,00' },
    { nome: 'VitaStrong', descricao: 'Suplemento vitamínico', preco: 'R$25,00' },
    { nome: 'CuraQuick', descricao: 'Antibiótico amplo espectro', preco: 'R$45,00' },
    { nome: 'AlívioFlex', descricao: 'Anti-inflamatório muscular', preco: 'R$20,00' },
    { nome: 'RapidCalm', descricao: 'Calmante leve', preco: 'R$30,00' },
    { nome: 'SleepEasy', descricao: 'Medicamento para promover o sono', preco: 'R$35,00' },
    { nome: 'AlertPlus', descricao: 'Estimulante mental', preco: 'R$50,00' },
    { nome: 'HeartCare', descricao: 'Medicamento para o coração', preco: 'R$40,00' },
    { nome: 'DigestComfort', descricao: 'Remédio para o estômago', preco: 'R$20,00' },
    { nome: 'RespiraClear', descricao: 'Remédio para as vias aéreas', preco: 'R$30,00' }
    // Adicione quantos objetos quiser aqui
  ];

 function adicionarVariosCards(cards) {
  for (var i = 0; i < cards.length; i++) {
    var card = cards[i];
    adicionarCard(card.nome, card.descricao, card.preco);
  }
}


// parte para não apresentar erro nas paginas contato.html e sobre.html
var container = document.getElementById('container-cards');
if (container) {
  adicionarVariosCards(cards);
}


function adicionarCard(nome, texto, preco) {
    // Cria os elementos HTML para o card
    var divCol = document.createElement('div');
    divCol.className = 'col';
  
    var divCard = document.createElement('div');
    divCard.className = 'card';
    divCard.style.width = '18rem';
  
    divCard.id = 'card-' + nome; // Aqui adicionamos o ID ao card

    // Adiciona o conteúdo ao card
    divCard.innerHTML = `
      <img src="./img/coracao.png" alt="favoritar" class="card-titulo-coracao">
      <img src="./img/remedio02.png" class="card-img-top" alt="...">
      <div class="card-body">
        <h4 class="card-title">${nome}</h4>
        <p class="card-text">${texto}</p>
        <h5>${preco}</h5>
        <a href="#" class="btn btn-primary">ADICIONAR NO CARRINHO</a>
      </div>
    `;
  
        // Adiciona o evento de clique ao coração
        divCard.querySelector(".card-titulo-coracao").addEventListener('click', CurtirFuncao);

    // Adiciona o card ao contêiner
    var container = document.getElementById('container-cards');
    container.appendChild(divCol);
    divCol.appendChild(divCard);
}

//----------------------------------------------------------------------------------------
function CurtirFuncao(event) {
    console.log(event)
}

var favoritos = []; // Array para armazenar os medicamentos favoritos

// Selecionar os botões de curtir
var botoesCurtir = document.querySelectorAll('.card-titulo-coracao');

// Adicionar um event listener para cada botão de curtir
botoesCurtir.forEach(function(botao) {
  botao.addEventListener('click', function(event) {
    event.preventDefault();

    // Encontrar o card que contém o botão clicado
    var cardCurtir = event.target.closest('.card');

    // Encontrar os detalhes do medicamento
    var nome = cardCurtir.querySelector('.card-title').textContent;
    var descricao = cardCurtir.querySelector('.card-text').textContent;
    var preco = cardCurtir.querySelector('h5').textContent;

    // Adicionar aos favoritos
    favoritos.push({
      nome: nome,
      descricao: descricao,
      preco: preco
    });

    // Exibir no console e como um alerta
    console.log("Medicamento adicionado aos favoritos: " + nome);
    console.log(favoritos);
    alert("O medicamento " + nome + " foi adicionado aos favoritos!");
  });
});





   /*  <<CODIGO EM CONSTRUÇÃO>>
function CurtirFuncao(event) {
    console.log(event)
}

    var favoritos = {}; // Objeto para armazenar os cards favoritos
    if (favoritos[cardId]) {
        // Se o card já está nos favoritos, nós o removemos
        var cardFavorito = document.getElementById(cardId + '-favorito');
        cardFavorito.parentElement.removeChild(cardFavorito);
        delete favoritos[cardId];
        card.querySelector(".card-titulo-coracao").classList.remove("curtido");
        card.classList.remove('favorito');
        cardFavorito.classList.remove('favorito');
    } else {
        // Se o card não está nos favoritos, nós o adicionamos
        var containerFavoritos = document.getElementById('container-favoritos');
        var clonedCard = card.cloneNode(true);
        clonedCard.id = cardId + '-favorito';
        clonedCard.querySelector(".card-titulo-coracao").onclick = function() {
            var originalCard = document.getElementById(cardId);
            originalCard.querySelector(".card-titulo-coracao").click();
        }
        containerFavoritos.appendChild(clonedCard);
        favoritos[cardId] = clonedCard;
        card.querySelector(".card-titulo-coracao").classList.add("curtido");
        card.classList.add('favorito');
        clonedCard.classList.add('favorito');
       

        //aviso med add
        console.log("Medicamento adicionado aos favoritos: ");

        // Mostra a lista favoritos
        console.log("Lista de medicamentos favoritos: ");
        for (var favorito in favoritos) {
            console.log(favoritos[favorito].querySelector('.card-title').textContent);
        }

        // Alerta med add
        alert("O medicamento foi adicionado aos favoritos!");
    }
}

*/




//----------------------------------------------------------------------------------------

var carrinho = [];

// Selecionar botões  
var botaoAdicionarCarrinho = document.querySelectorAll('.btn.btn-primary');

// adicionar um event listener
botaoAdicionarCarrinho.forEach(function(botao) {
    botao.addEventListener('click', function(event) {
        event.preventDefault();

        // Encontrar o card que contém o botão clicado
        var card = event.target.closest('.card');

        // Encontrar os detalhes do medicamento
        var nome = card.querySelector('.card-title').textContent;
        var descricao = card.querySelector('.card-text').textContent;
        var preco = card.querySelector('h5').textContent;

        // Adicionar ao carrinho
        carrinho.push({
            nome: nome,
            descricao: descricao,
            preco: preco
        });

        // Exibir no console e como um alerta
        console.log("Medicamento adicionado ao carrinho: " + nome);
        console.log(carrinho);  
        alert("O medicamento " + nome + " foi adicionado ao carrinho!");

    
    });
});

//----------------------------------------------------------------------------------------
// PAGINA CONTATO

var assuntos = ["Entrega", "Produtos", "Contato", "Dúvidas", "Outros"];


var selectAssunto = document.getElementById("assunto");

assuntos.forEach(function(assunto) {
  var option = document.createElement("option");
  option.value = assunto;
  option.text = assunto;
  selectAssunto.appendChild(option);
});



var buttonFinalizarCadastro = document.getElementById('finalizar-cadastro');

buttonFinalizarCadastro.addEventListener('click', function(event) {
  event.preventDefault();

  var firstName = document.getElementById('first-name').value;
  var lastName = document.getElementById('last-name').value;

  var fullName = firstName + ' ' + lastName;

  console.log('Nome da pessoa que enviou a mensagem:', fullName);

  alert('Mensagem enviada com sucesso!');
});
