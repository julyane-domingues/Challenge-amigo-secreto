let amigos = [];

function adicionarAmigo() {
    let input = document.getElementById('amigo');
    if (!input.value.trim()) {
        alert("Digite o nome do amigo");
        return;
    }
    amigos.push(input.value.trim());
    input.value = '';
    atualizarLista();
}

function atualizarLista() {
    document.getElementById('listaAmigos').innerHTML = amigos.map(amigo => `<li>${amigo}</li>`).join('');
}

function sortearAmigo() {
    if (!amigos.length) {
        alert('Nenhum amigo adicionado');
        return;
    }
    document.getElementById("resultado").innerHTML = `O amigo sorteado foi ${amigos[Math.floor(Math.random() * amigos.length)]}`;
}

