let amigos = [];

function adicionarAmigo() {
    // 2.a Captura o valor do campo de entrada
    let amigo = document.getElementById('amigo').value;

    // 2.b Valida a entrada: verifica se o campo está vazio
    if (amigo == '') {
        alert("Por favor, insira um nome.");
        return; // Retorna para a função para que o código não continue
    }
    
    // 2.c Atualiza o array de amigos: adiciona o nome
    amigos.push(amigo);

    // 2.d Limpa o campo de entrada
    document.getElementById('amigo').value = '';
}

function atualizarListaAmigos() {
    // 3.a Obtém o elemento da lista
    let listaAmigos = document.getElementById('listaAmigos');
    
    // 3.b Limpa a lista existente para evitar duplicados
    listaAmigos.innerHTML = '';

    // 3.c Percorre o array e adiciona cada nome
    for (let i = 0; i < amigos.length; i++) {
        listaAmigos.innerHTML = listaAmigos.innerHTML + '<li>' + amigos[i] + '</li>';
    }
}

function adicionarAmigo() {
    let amigo = document.getElementById('amigo').value;

    if (amigo == '') {
        alert("Por favor, insira um nome.");
        return;
    }
    
    amigos.push(amigo);

    document.getElementById('amigo').value = '';
    
    // Chama a função para atualizar a lista na tela
    atualizarListaAmigos();
}

function sortearAmigo() {
    // 4.a Validar que há amigos disponíveis
    if (amigos.length == 0) {
        alert("Adicione pelo menos um amigo para sortear.");
        return;
    }

    // 4.b Gerar um índice aleatório
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    
    // 4.c Obter o nome sorteado
    let amigoSorteado = amigos[indiceAleatorio];

    // 4.d Mostrar o resultado
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `O amigo secreto sorteado foi: ${amigoSorteado}`;
}