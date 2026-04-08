document.addEventListener("DOMContentLoaded", renderAdmin);

// ==========================================
// RENDER ADMIN
// ==========================================
function renderAdmin() {
    limparColunas();

    sistema.pedidos.forEach(p => {
        const card = criarCard(p);

        document
            .getElementById(`col-${p.status}`)
            .appendChild(card);
    });
}

// ==========================================
// LIMPAR
// ==========================================
function limparColunas() {
    ["producao","andamento","finalizado","entregue"]
        .forEach(c => document.getElementById("col-"+c).innerHTML="");
}

// ==========================================
// CARD
// ==========================================
function criarCard(p) {
    const div = document.createElement("div");
    div.className = "pedido-card";

    const cliente = sistema.clientes.find(c=>c.id===p.clienteId);

    div.innerHTML = `
        <strong>${cliente?.nome || "Cliente"}</strong><br>
        R$ ${p.total.toFixed(2)}<br>
        <button onclick="mudarStatus(${p.id}, 'producao')">Prod</button>
        <button onclick="mudarStatus(${p.id}, 'andamento')">And</button>
        <button onclick="mudarStatus(${p.id}, 'finalizado')">Fin</button>
        <button onclick="mudarStatus(${p.id}, 'entregue')">Ent</button>
    `;

    return div;
}

// ==========================================
// MUDAR STATUS
// ==========================================
function mudarStatus(id, status) {
    const pedido = sistema.pedidos.find(p => p.id === id);
    if (!pedido) return;

    pedido.status = status;

    salvarNoNavegador();
    renderAdmin();
}
