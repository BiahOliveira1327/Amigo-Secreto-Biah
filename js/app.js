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

}

function reiniciar(evento) {
}