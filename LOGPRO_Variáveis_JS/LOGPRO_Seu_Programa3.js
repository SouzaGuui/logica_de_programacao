


// Anúncio de boas-vindas
let anuncio = "Bem-vindo à loja do Souza!!!";
console.log(anuncio);

// Anúncio do catálogo
anuncio = "Confira nosso catálogo:";
console.log(anuncio);

// Catálogo de produtos
let catalogo = [
  { nome: "Sorvete de creme", preco: 0.99 },
  { nome: "Sorvete de morango", preco: 2.49 },
  { nome: "Sorvete de chocolate", preco: 2.49 },
  { nome: "Sorvete de maracujá", preco: 1.49 },
  { nome: "Sorvete de tutti-fruti", preco: 1.99 }
];

// Exibe o catálogo
catalogo.forEach((produto, indice) => {
  console.log(${indice + 1} - ${produto.nome} R$ ${produto.preco.toFixed(2)});
});





// Variável para armazenar a escolha do usuário
let escolha;

// Laço que continua até o usuário inserir uma opção válida
while (true) {
  // Solicita a escolha do usuário
  escolha = parseInt(prompt("Escolha a opção de 1 a 5:"));

  // Verifica se a entrada é um número
  if (isNaN(escolha)) {
    alert("Entrada inválida. Por favor, escolha um produto válido.");
  
  // Verifica se a escolha está fora do intervalo permitido
  } else if (escolha < 1 || escolha > 5) {
    alert("Opção inválida. Por favor, digite um produto entre 1 e 5.");
  
  // Se for válida, sai do laço
  } else {
    break;
  }
}

// Tratamento da escolha do produto
let produtoEscolhido = catalogo[escolha - 1];

// Mostra a escolha final no console
console.log(Você escolheu: ${produtoEscolhido.nome} - R$ ${produtoEscolhido.preco.toFixed(2)});