




Desafio 1: Cadastro de Usu�rio 

 




Enunciado: 

Crie um programa que simula o cadastro de um usu�rio. O programa deve pedir as seguintes informa��es ao usu�rio: nome, idade, e-mail e telefone. Depois, ele deve exibir uma mensagem confirmando os dados informados. 

Requisitos: 

Solicitar as entradas: nome, idade, e-mail e telefone. 

Usar vari�veis para armazenar cada dado. 

Exibir uma mensagem de confirma��o com todos os dados fornecidos. 

 

RESPOSTA 

 

let nome = prompt("Digite seu nome: ") 

let idade = Number(prompt("Sua idade � :")) 

let email = prompt("Digite seu email: ") 

let telefone = Number(prompt("Digite seu telefone: ")) 

  

console.log("o seu nome �", nome,"voc� tem", idade, "sua idade �","seu email �",email, "o seu telefone �", telefone) 

  

let confirmacao = "parabens seu cadastro foi aceito" 

console.log (confirmacao) 








 Desafio 2: Descobrindo a Idade 

 





Enunciado: 

Crie um programa que pe�a ao usu�rio o seu ano de nascimento e, com base no ano atual, calcule e exiba a idade da pessoa. 

Requisitos: 

Solicitar a entrada: ano de nascimento do usu�rio. 

Usar uma vari�vel para armazenar o ano de nascimento. 

Calcular a idade com base no ano atual (2025). 

Exibir a idade calculada. 

 

RESPOSTA 

let ano_de_nascimento = Number(prompt("Digite seu ano de nascimento: ")) console.log ("o seu ano de nascimento � ", ano_de _nascimento) 

let ano_atual = 2025 let idade = ano_atual - ano_de_nascimeto console.log ("Sua idade �", idade) 