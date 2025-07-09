function atualizarDashboard() {
  const produtos = JSON.parse(localStorage.getItem('produtos') || '[]');
  let estoqueTotal = 0, valorTotal = 0;
  produtos.forEach(p => {
    estoqueTotal += p.estoque;
    valorTotal += p.estoque * p.valor;
  });
  const estoqueTotalElem = document.getElementById('estoqueTotal');
  if (estoqueTotalElem) estoqueTotalElem.textContent = estoqueTotal.toString();

  const produtosCadastradosElem = document.getElementById('produtosCadastrados');
  if (produtosCadastradosElem) produtosCadastradosElem.textContent = produtos.length.toString();

  const valorTotalElem = document.getElementById('valorTotal');
  if (valorTotalElem) valorTotalElem.textContent = valorTotal.toFixed(2);
}