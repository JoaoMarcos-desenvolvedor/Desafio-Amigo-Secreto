let amigos = [];

function adicionarAmigo() {
    let amigo = document.getElementById('amigo').value;
    if (amigo.trim() === '') {
        alert("Por favor, insira um nome.");
        return;
    }

    if (amigos.includes(amigo)) {
        alert('Este nome já foi adicionado!');
        return;
    }

    let listaAmigos = document.getElementById('listaAmigos');
    amigos.push(amigo);

    let novoItem = document.createElement('li');
    novoItem.textContent = amigo;
    listaAmigos.appendChild(novoItem);
    
    document.getElementById('amigo').value = '';
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Adicione pelo menos 2 amigos para fazer o sorteio.");
        return;
    }

    document.getElementById('listaAmigos').innerHTML = '';
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = '';
    embaralhar(amigos);


    let amigoSorteado = amigos[0];
    let itemResultado = document.createElement('li');
    itemResultado.textContent = `O amigo secreto sorteado foi: ${amigoSorteado}`;
    resultado.appendChild(itemResultado);
    amigos = [];
}

function embaralhar(lista) {
    for (let i = lista.length; i; i--) {
        const indiceAleatorio = Math.floor(Math.random() * i);
        const elementoTemporario = lista[i - 1];
        lista[i - 1] = lista[indiceAleatorio];
        lista[indiceAleatorio] = elementoTemporario;
    }
}
