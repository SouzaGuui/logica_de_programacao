


// An�ncio de boas-vindas
let anuncio = "Bem-vindo � loja do Souza!!!";
console.log(anuncio);

// An�ncio do cat�logo
anuncio = "Confira nosso cat�logo:";
console.log(anuncio);

// Cat�logo de produtos
let catalogo = [
  { nome: "Sorvete de creme", preco: 0.99 },
  { nome: "Sorvete de morango", preco: 2.49 },
  { nome: "Sorvete de chocolate", preco: 2.49 },
  { nome: "Sorvete de maracuj�", preco: 1.49 },
  { nome: "Sorvete de tutti-fruti", preco: 1.99 }
];

// Exibe o cat�logo
catalogo.forEach((produto, indice) => {
  console.log(${indice + 1} - ${produto.nome} R$ ${produto.preco.toFixed(2)});
});





// Vari�vel para armazenar a escolha do usu�rio
let escolha;

// La�o que continua at� o usu�rio inserir uma op��o v�lida
while (true) {
  // Solicita a escolha do usu�rio
  escolha = parseInt(prompt("Escolha a op��o de 1 a 5:"));

  // Verifica se a entrada � um n�mero
  if (isNaN(escolha)) {
    alert("Entrada inv�lida. Por favor, escolha um produto v�lido.");
  
  // Verifica se a escolha est� fora do intervalo permitido
  } else if (escolha < 1 || escolha > 5) {
    alert("Op��o inv�lida. Por favor, digite um produto entre 1 e 5.");
  
  // Se for v�lida, sai do la�o
  } else {
    break;
  }
}

// Tratamento da escolha do produto
let produtoEscolhido = catalogo[escolha - 1];

// Mostra a escolha final no console
console.log(Voc� escolheu: ${produtoEscolhido.nome} - R$ ${produtoEscolhido.preco.toFixed(2)});