unction adicionarItem(){
 const nome = produto.value;
 const qtd = +quantidade.value;
 const largura = +document.getElementById("largura").value || 1;
 const altura = +document.getElementById("altura").value || 1;

 const area = (largura * altura)/10000;
 const prod = sistema.produtos.find(p=>p.nome===nome);
 const total = prod.preco * (prod.tipo==='m2'?area:qtd);

 sistema.carrinho.push({nome,qtd,area,total});
 render();
}

function render(){
 listaItens.innerHTML='';
 let total=0;
 sistema.carrinho.forEach(i=>{
  total+=i.total;
  listaItens.innerHTML+=`<p>${i.nome} - R$ ${i.total.toFixed(2)}</p>`;
 });
 totalGeral.innerText=total.toFixed(2);
}

function salvarOrcamento(){
 sistema.orcamentos.push({id:sistema.contador++, itens:sistema.carrinho});
 salvar();
}

function finalizarPedido(){
 sistema.pedidos.push({itens:sistema.carrinho, status:'producao'});
 salvar();
}
