const amigos = [];

function adicionar() {
    const nome = document.getElementById("nome-amigo").value.trim();

    if (nome === "") {
        return;
    }

    amigos.push(nome);

    document.getElementById("lista-amigos").textContent = amigos.join(", ");

    document.getElementById("nome-amigo").value = "";
}

function sortear() {
    const indice = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indice];

    document.getElementById("lista-sorteio").textContent = amigoSorteado;
}

function reiniciar(evento) {
}