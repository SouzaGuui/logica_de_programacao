


Exercícios de if e Else 


Exercícios focados apenas em `if`, `else` e `else if`: 
  

Exercício 1: Crie um programa que verifique se uma idade é maior ou igual a 18 e exiba "Maior de idade" ou "Menor de idade". 

 

/*let idade = 18  

  

if (idade >= 18){ 

 console.log("Maior idade")  

}  

else{ 

 console.log("Menor idade")  

}*/ 

 


Exercício 2: Desenvolva um programa que, com base no tempo, exiba "Bom dia" (entre 6h e 12h), "Boa tarde" (entre 12h e 18h) ou "Boa noite" (após 18h). 

 

/*let horas = 15 

if (horas >= 6 && horas < 12){ 

console.log("bom dia") 

} 

else if (horas >= 13 && horas < 18){ 

console.log("boa tarde 

 

else{ 

console.log("boa noite") 

}*/ 


 

Exercício 3: Faça um programa que verifique se uma pessoa pode entrar em um evento com base em sua idade (menores de 16 anos não podem entrar). 

 

/*let idade = prompt("Qual a sua idade: ") 

  

if (idade >= 16){  

console.log("Você pode entar no evento")  

}  

  

else{  

console.log("Você não pode entrar no evento") 

 } */ 

 


Exercício 4: Crie um programa que receba dois números e exiba qual deles é o maior. 

 

/*let valor1 = prompt("Escolha seu primeiro valor: ") 

let valor2 = prompt("Escolha seu segundo valor: ") 

  

if (valor1 >  valor2 ){ 

console.log ("O primeiro valor é superior ao segundo") 

} 

if (valor1 <  valor2 ){ 

console.log ("O segundo valor é superior ao primeiro") 

}*/ 

 

 

Exercício 5: Escreva um programa que, com base na temperatura, exiba se está "Frio", "Térmico" ou "Quente". 

 

let temperatura = 25 

if (temperatura <= 20){ 

console.log("frio") 

} 

else if (temperatura >= 25){console.log("calor") 

} 

else if(temperatura >= 21 && temperatura < 24){ 

console.log("ameno") 

} 

 


Exercício 6: Desenvolva um programa que verifica se uma palavra é igual a "Felicidade". Se for, exiba "Palavra correta". Caso contrário, exiba "Palavra incorreta". 

 

let palavra = prompt("Digite uma palavra: ") 

if (palavra === "felicidade") { 

console.log("palavra correta") 

} 

 else { 

console.log("palavra incorreta") 

} 

 


Exercício 7: Crie um programa que, com base na quantidade de moedas, exiba se a pessoa possui "Poucas moedas" (menos de 10), "Quantidade média" (entre 10 e 20) ou "Muitas moedas" (mais de 20). 

 

let moedas = prompt("Quantas moedas voce tem ?: ") 

if (moedas >=0 && moedas <10){ 

console.log ("Você tem poucas moedas!") 

} 

if (moedas >=10 && moedas <50){ 

console.log ("Você tem uma quantidade média de moedas!") 

} 

if (moedas >=50 ){ 

console.log ("Você tem muitas moedas!") 

} 

 



Exercício 8: Faça um programa que leia uma temperatura e exiba se está "Muito quente" (acima de 30°C), "Calor" (entre 20°C e 30°C) ou "Frio" (abaixo de 20°C). 

 

let temperatura = 31 

  

if(temperatura <= 20){ 

    console.log("Frio")} 

else if (temperatura >= 30){ 

    console.log("Muito quente") 

     

} 

  

else if (temperatura >= 20 && temperatura < 30){ 

    console.log("Calor") 

     

} 




Exercício 9: Desenvolva um programa que verifique se um número é positivo ou negativo. 

 

let numero = prompt("digite um valor: ") 

if (numero >= 0){ 

    console.log("positivo") 

} 

else if (numero <= 0){ 

    console.log("negativo") 

} 

 



Exercício 10: Crie um programa que, com base na nota do aluno, exiba "Aprovado" se a nota for maior ou igual a 7 e "Reprovado" caso contrário. 

 

let nota = prompt("qual foi a sua nota de 1 a 10: ") 

  

if(nota >= 7 && nota <=10){console.log("Aprovado")} 

if (nota <= 7 ){console.log("Reprovado")} 

  

if (nota >10){console.log("O número escolhido é inválido!")} 

 

 

Exercício 11: Escreva um programa que verifica se uma palavra está entre três opções: "Cachorro", "Gato" ou "Pássaro". Caso contrário, exiba "Animal não listado". 

 

/*let animal = "Gato"; 

if (animal === "Cachorro" || animal === "Gato" || animal === "Pássaro") { 

    console.log("Animal listado"); 

} else { 

    console.log("Animal não listado"); 

}*/ 

 



Exercício 12: Desenvolva um programa que leia o dia da semana e exiba se é "Fim de semana" ou "Dia útil". 

 

/*let diaSemana = "Segunda-feira"; 

if (diaSemana === "Sábado" || diaSemana === "Domingo") { 

    console.log("Fim de semana"); 

} else { 

    console.log("Dia útil"); 

}*/ 

 



Exercício 13: Faça um programa que verifica se uma pessoa tem experiência em programação. Se tiver mais de 2 anos de experiência, exiba "Experiente". Caso contrário, exiba "Iniciante". 

 

/*let experiencia = 3; 

if (experiencia > 2) { 

    console.log("Experiente"); 

} else { 

    console.log("Iniciante"); 

}*/ 





Exercício 14: Escreva um programa que verifica se um número está dentro de um intervalo (10 a 20). Se estiver, exiba "Dentro do intervalo". Se não, exiba "Fora do intervalo". 

 

/*let numero = 15; 

if (numero >= 10 && numero <= 20) { 

    console.log("Dentro do intervalo"); 

} else { 

    console.log("Fora do intervalo"); 

}*/ 

 



Exercício 15: Desenvolva um programa que verifica se uma pessoa pode tirar carteira de motorista com base na idade. A idade mínima é 18 anos. 

 

/*let idadeCNH = 18; 

if (idadeCNH >= 18) { 

    console.log("Pode tirar carteira de motorista"); 

} else { 

    console.log("Não pode tirar carteira de motorista"); 

}*/ 

 



Exercício 16: Crie um programa que exiba "Positivo" se um número for maior que zero, "Negativo" se for menor que zero e "Zero" se for igual a zero. 

 

/*let valor = 0; 

if (valor > 0) { 

    console.log("Positivo"); 

} else if (valor < 0) { 

    console.log("Negativo"); 

} else { 

    console.log("Zero"); 

}*/ 
