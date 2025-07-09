function cadastrarProduto(event) {
  event.preventDefault();
  const produto = {
    codigo: document.getElementById('codigo').value,
    descricao: document.getElementById('descricao').value,
    estoque: parseInt(document.getElementById('estoque').value),
    valor: parseFloat(document.getElementById('valor').value),
    categoria: document.getElementById('categoria').value
  };

  const produtos = JSON.parse(localStorage.getItem('produtos') || '[]');
  produtos.push(produto);
  localStorage.setItem('produtos', JSON.stringify(produtos));

  document.querySelector('form').reset();
  atualizarTabela();
  atualizarDashboard();
}