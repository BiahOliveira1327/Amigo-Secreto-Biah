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
    if (amigos.length < 2) {
        return;
    }

    const indice = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indice];

    document.getElementById("lista-sorteio").textContent = amigoSorteado;
}

function reiniciar(evento) {
    if (evento) {
        evento.preventDefault();
    }

    amigos.length = 0;

    document.getElementById("lista-amigos").textContent = "";
    document.getElementById("lista-sorteio").textContent = "";
    document.getElementById("nome-amigo").value = "";
}