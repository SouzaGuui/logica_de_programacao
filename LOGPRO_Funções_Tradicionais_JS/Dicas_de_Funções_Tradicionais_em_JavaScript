Funções Tradicionais em JavaScript

Objetivo:

Explorar em detalhes as funções tradicionais em JavaScript, abordando conceitos básicos, estrutura, escopo, parâmetros, 
retorno de valores e exemplos práticos com explicações mais detalhadas.





Introdução às Funções Tradicionais em JavaScript

As funções tradicionais são a forma mais comum e fundamental para organizar e reutilizar código em JavaScript. Elas ajudam a modularizar tarefas, 
permitindo que blocos de código sejam reutilizados em diferentes partes do programa.






 1.O que são Funções Tradicionais?

Funções tradicionais em JavaScript são blocos reutilizáveis de código que realizam uma tarefa específica ou devolvem um resultado. Elas são definidas usando a palavra-chave `function`.





#2. Sintaxe de Funções Tradicionais

A estrutura básica de uma função tradicional:



function nomeDaFuncao(parametro1, parametro2) {
  // Bloco de código
  return resultado; // Opcional
}


- Nome da Função: Identifica a função.
- Parâmetros: Variáveis passadas à função para manipulação.
- Bloco de Código: Contém as instruções a serem executadas.
- Return: Retorna um valor ou expressão.




3. Declaração de Funções Tradicionais

a) Função Básica

Exemplo simples de uma função que imprime uma mensagem:



function saudacao() {
  console.log('Olá, Mundo!');
}
saudacao(); // Chamando a função


Nesse exemplo, a função `saudacao` imprime a mensagem `"Olá, Mundo!"` no console.



b)Função com Parâmetro

Funções podem receber informações externas através de parâmetros. Por exemplo:


function saudacao(nome) {
  console.log(`Olá, ${nome}!`);
}
saudacao('João'); // Olá, João!
saudacao('Maria'); // Olá, Maria!



Aqui, a função `saudacao` aceita um nome como parâmetro e imprime uma mensagem personalizada com o nome fornecido.





4. Passagem de Parâmetros

Os parâmetros permitem a personalização da função com diferentes valores. Por exemplo:



function somar(a, b) {
  return a + b;
}
console.log(somar(2, 3)); // 5
console.log(somar(10, 20)); // 30


Neste exemplo, `a` e `b` são parâmetros que recebem os valores passados na chamada da função. A função retorna a soma desses valores.






 5. Retorno de Valores

Funções tradicionais podem retornar valores utilizando `return`. Por exemplo:



function multiplicar(a, b) {
  return a * b;
}
console.log(multiplicar(4, 5)); // 20


A função `multiplicar` retorna o produto dos dois números passados.








6. Escopo das Funções

O escopo determina a visibilidade das variáveis dentro e fora da função. Variáveis definidas dentro da função são locais e não podem ser acessadas fora dela.

Exemplo:



function calcularArea(largura, altura) {
  let area = largura * altura; // Variável local
  return area;
}
console.log(calcularArea(5, 10)); // 50
// console.log(area); // Erro: área não está definida fora da função


Neste caso, `area` é uma variável local à função `calcularArea`, ou seja, só é acessível dentro dessa função.






 7. Exemplos Práticos

Exemplo 1: Função que verifica se um número é par ou ímpar



function verificarParImpar(numero) {
  if (numero % 2 === 0) {
    return 'Par';
  } else {
    return 'Ímpar';
  }
}
console.log(verificarParImpar(8)); // Par
console.log(verificarParImpar(15)); // Ímpar


Aqui, a função `verificarParImpar` verifica se o número passado como argumento é par ou ímpar e retorna o resultado.






Exemplo 2: Função que converte Celsius para Fahrenheit


function celsiusParaFahrenheit(c) {
  return (c * 9/5) + 32;
}
console.log(celsiusParaFahrenheit(25)); // 77


A função `celsiusParaFahrenheit` converte uma temperatura dada em graus Celsius para Fahrenheit.








Exemplo 3: Função que calcula o dobro de um número

function calcularDobra(numero) {
  return numero * 2;
}
console.log(calcularDobra(7)); // 14


A função `calcularDobra` recebe um número e retorna o seu dobro.





Conclusão

Funções tradicionais em JavaScript são poderosas ferramentas para organizar e reutilizar código. Elas permitem a passagem de parâmetros,
 a manipulação de escopos e o retorno de resultados, tornando o desenvolvimento mais simples e eficiente.
