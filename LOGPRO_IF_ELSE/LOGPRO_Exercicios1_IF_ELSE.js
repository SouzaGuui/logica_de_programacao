


Exerc�cios de if e Else 


Exerc�cios focados apenas em `if`, `else` e `else if`: 
  

Exerc�cio 1: Crie um programa que verifique se uma idade � maior ou igual a 18 e exiba "Maior de idade" ou "Menor de idade". 

 

/*let idade = 18  

  

if (idade >= 18){ 

 console.log("Maior idade")  

}  

else{ 

 console.log("Menor idade")  

}*/ 

 


Exerc�cio 2: Desenvolva um programa que, com base no tempo, exiba "Bom dia" (entre 6h e 12h), "Boa tarde" (entre 12h e 18h) ou "Boa noite" (ap�s 18h). 

 

/*let horas = 15 

if (horas >= 6 && horas < 12){ 

console.log("bom dia") 

} 

else if (horas >= 13 && horas < 18){ 

console.log("boa tarde 

 

else{ 

console.log("boa noite") 

}*/ 


 

Exerc�cio 3: Fa�a um programa que verifique se uma pessoa pode entrar em um evento com base em sua idade (menores de 16 anos n�o podem entrar). 

 

/*let idade = prompt("Qual a sua idade: ") 

  

if (idade >= 16){  

console.log("Voc� pode entar no evento")  

}  

  

else{  

console.log("Voc� n�o pode entrar no evento") 

 } */ 

 


Exerc�cio 4: Crie um programa que receba dois n�meros e exiba qual deles � o maior. 

 

/*let valor1 = prompt("Escolha seu primeiro valor: ") 

let valor2 = prompt("Escolha seu segundo valor: ") 

  

if (valor1 >  valor2 ){ 

console.log ("O primeiro valor � superior ao segundo") 

} 

if (valor1 <  valor2 ){ 

console.log ("O segundo valor � superior ao primeiro") 

}*/ 

 

 

Exerc�cio 5: Escreva um programa que, com base na temperatura, exiba se est� "Frio", "T�rmico" ou "Quente". 

 

let temperatura = 25 

if (temperatura <= 20){ 

console.log("frio") 

} 

else if (temperatura >= 25){console.log("calor") 

} 

else if(temperatura >= 21 && temperatura < 24){ 

console.log("ameno") 

} 

 


Exerc�cio 6: Desenvolva um programa que verifica se uma palavra � igual a "Felicidade". Se for, exiba "Palavra correta". Caso contr�rio, exiba "Palavra incorreta". 

 

let palavra = prompt("Digite uma palavra: ") 

if (palavra === "felicidade") { 

console.log("palavra correta") 

} 

 else { 

console.log("palavra incorreta") 

} 

 


Exerc�cio 7: Crie um programa que, com base na quantidade de moedas, exiba se a pessoa possui "Poucas moedas" (menos de 10), "Quantidade m�dia" (entre 10 e 20) ou "Muitas moedas" (mais de 20). 

 

let moedas = prompt("Quantas moedas voce tem ?: ") 

if (moedas >=0 && moedas <10){ 

console.log ("Voc� tem poucas moedas!") 

} 

if (moedas >=10 && moedas <50){ 

console.log ("Voc� tem uma quantidade m�dia de moedas!") 

} 

if (moedas >=50 ){ 

console.log ("Voc� tem muitas moedas!") 

} 

 



Exerc�cio 8: Fa�a um programa que leia uma temperatura e exiba se est� "Muito quente" (acima de 30�C), "Calor" (entre 20�C e 30�C) ou "Frio" (abaixo de 20�C). 

 

let temperatura = 31 

  

if(temperatura <= 20){ 

    console.log("Frio")} 

else if (temperatura >= 30){ 

    console.log("Muito quente") 

     

} 

  

else if (temperatura >= 20 && temperatura < 30){ 

    console.log("Calor") 

     

} 




Exerc�cio 9: Desenvolva um programa que verifique se um n�mero � positivo ou negativo. 

 

let numero = prompt("digite um valor: ") 

if (numero >= 0){ 

    console.log("positivo") 

} 

else if (numero <= 0){ 

    console.log("negativo") 

} 

 



Exerc�cio 10: Crie um programa que, com base na nota do aluno, exiba "Aprovado" se a nota for maior ou igual a 7 e "Reprovado" caso contr�rio. 

 

let nota = prompt("qual foi a sua nota de 1 a 10: ") 

  

if(nota >= 7 && nota <=10){console.log("Aprovado")} 

if (nota <= 7 ){console.log("Reprovado")} 

  

if (nota >10){console.log("O n�mero escolhido � inv�lido!")} 

 

 

Exerc�cio 11: Escreva um programa que verifica se uma palavra est� entre tr�s op��es: "Cachorro", "Gato" ou "P�ssaro". Caso contr�rio, exiba "Animal n�o listado". 

 

/*let animal = "Gato"; 

if (animal === "Cachorro" || animal === "Gato" || animal === "P�ssaro") { 

    console.log("Animal listado"); 

} else { 

    console.log("Animal n�o listado"); 

}*/ 

 



Exerc�cio 12: Desenvolva um programa que leia o dia da semana e exiba se � "Fim de semana" ou "Dia �til". 

 

/*let diaSemana = "Segunda-feira"; 

if (diaSemana === "S�bado" || diaSemana === "Domingo") { 

    console.log("Fim de semana"); 

} else { 

    console.log("Dia �til"); 

}*/ 

 



Exerc�cio 13: Fa�a um programa que verifica se uma pessoa tem experi�ncia em programa��o. Se tiver mais de 2 anos de experi�ncia, exiba "Experiente". Caso contr�rio, exiba "Iniciante". 

 

/*let experiencia = 3; 

if (experiencia > 2) { 

    console.log("Experiente"); 

} else { 

    console.log("Iniciante"); 

}*/ 





Exerc�cio 14: Escreva um programa que verifica se um n�mero est� dentro de um intervalo (10 a 20). Se estiver, exiba "Dentro do intervalo". Se n�o, exiba "Fora do intervalo". 

 

/*let numero = 15; 

if (numero >= 10 && numero <= 20) { 

    console.log("Dentro do intervalo"); 

} else { 

    console.log("Fora do intervalo"); 

}*/ 

 



Exerc�cio 15: Desenvolva um programa que verifica se uma pessoa pode tirar carteira de motorista com base na idade. A idade m�nima � 18 anos. 

 

/*let idadeCNH = 18; 

if (idadeCNH >= 18) { 

    console.log("Pode tirar carteira de motorista"); 

} else { 

    console.log("N�o pode tirar carteira de motorista"); 

}*/ 

 



Exerc�cio 16: Crie um programa que exiba "Positivo" se um n�mero for maior que zero, "Negativo" se for menor que zero e "Zero" se for igual a zero. 

 

/*let valor = 0; 

if (valor > 0) { 

    console.log("Positivo"); 

} else if (valor < 0) { 

    console.log("Negativo"); 

} else { 

    console.log("Zero"); 

}*/ 
