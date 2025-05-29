


Desafio 1 



Tarefa: Criar um Quiz de Perguntas F�ceis com Contagem de Respostas Corretas e Incorretas 

Objetivo: 

Desenvolver um quiz interativo em JavaScript com 10 perguntas f�ceis. O quiz deve permitir ao usu�rio responder a cada pergunta com m�ltiplas alternativas,
 e ao final, exibir a quantidade de respostas corretas e incorretas. 

 

Requisitos: 

Estrutura do Quiz:  

O quiz deve conter 10 perguntas de escolha m�ltipla. 

Cada pergunta deve ter 4 alternativas (A, B, C, D). 

O usu�rio deve ser capaz de digitar sua resposta, e o sistema deve validar a resposta como correta ou incorreta. 

Contagem de Respostas:  

O sistema deve contar e exibir o n�mero de respostas corretas e incorretas ao final do quiz. 

Exibi��o das Perguntas:  

Exiba a pergunta e suas alternativas usando o comando console.log(). 

Utilize a fun��o prompt() para obter as respostas do usu�rio. 

Valida��o de Respostas:  

O sistema deve verificar se a resposta do usu�rio est� correta, levando em considera��o que a resposta correta pode ser digitada em letras mai�sculas ou min�sculas. 

Resultado Final:  

Ap�s o usu�rio responder todas as perguntas, o sistema deve apresentar um resumo com o n�mero de respostas corretas e incorretas. 

 

 

 

  

console.log("Perguntas sobre futebol")  

  

    let respostaCorreta = 0   

  

let respostaIncorreta = 0   

  

  

  

//Pergunta1   

  

console.log("\nQual trio de futebol mais marcou gols no mundo ?")  

  

console.log("A - Lionel Messi, Luis Su�rez e Neymar J�nior(MSN)")  

  

console.log("B - Cristiano Ronaldo, Karim Benzema e Gareth Bale(BBC)")  

  

console.log("C - M�rio de Castro, Jairo e Said")  

  

console.log("D - R9, rivaldo e Ronaldinho")  

  

let pergunta1 = prompt("\nDigite a resposta: ")  

  

if (pergunta1 == "C"){  

  

    console.log("\nAlternativa correta")  

  

    respostaCorreta ++  

 
}  


else{  

    console.log("\nResposta Errada: \n � correta � C")  

  

    respostaIncorreta ++  

}  

  

   

  

// Exibir o resultado  

  

console.log("\n Resumo final")  

  

console.log("Resposta Correta: " + respostaCorreta)  

  

console.log("Resposta Incorreta: " + respostaIncorreta)  

  

   

  

 

//Pergunta2  

  

console.log("\nEm que ano o wendell lira ganhou puskas ?")  

  

console.log("A - 2015")  

  

console.log("B - 2011")  

  

console.log("C - 2013")  

  

console.log("D - 2010")  

  

let pergunta2 = prompt("\nDigite a resposta: ")  

  

if (pergunta2 == "A" ||pergunta2 == 2015){  

  

    console.log("\nAlternativa correta")  

  

    respostaCorreta ++  


}  

 
else{  

   console.log("\nResposta Errada: \n � correta � A") 

  

    respostaIncorreta ++  

}  

  

// Exibir o resultado  

  

console.log("\n Resumo final")  

  

console.log("Resposta Correta: " + respostaCorreta)  

  

console.log("Resposta Incorreta: " + respostaIncorreta)  

  

   

  

   

  

 

//Pergunta3  

  

console.log("\nQual � o maior artilheiro da champions league?")  

  

console.log("A - karim Benzema")  

  

console.log("B - Robert Lewandowski")  

  

console.log("C - Cristiano Ronaldo")  

  

console.log("D - Lionel Messi")  

  

let pergunta3 = prompt("\nDigite a resposta: ")  

  

if (pergunta3 == "C"){  

  

    console.log("\nAlternativa correta")  

  

    respostaCorreta ++  

  

}  


else{  

  

  console.log("\nResposta Errada: \n � correta � C") 

  

    respostaIncorreta ++  

}  

  

   

  

// Exibir o resultado  

  

console.log("\n Resumo final")  

  

console.log("Resposta Correta: " + respostaCorreta)  

  

console.log("Resposta Incorreta: " + respostaIncorreta)  

  

   

  

   

  

   

  

//Pergunta4  

  

console.log("\nQuando foi criado a libertadores da am�rica ?")  

  

console.log("A - 1960")  

  

console.log("B - 1955")  

  

console.log("C - 1940")  

  

console.log("D - 1970")  

  

let pergunta4 = prompt("\nDigite a resposta: ")  

  

if (pergunta4 == "A"){  

  

    console.log("\nAlternativa correta")  

  

    respostaCorreta ++  

}  


else{  

  

  console.log("\nResposta Errada: \n � correta � A") 

  

    respostaIncorreta ++  

}  

  

   

  

// Exibir o resultado  

  

console.log("\n Resumo final")  

  

console.log("Resposta Correta: " + respostaCorreta)  

  

console.log("Resposta Incorreta: " + respostaIncorreta)  

  

   

  

   

  

//Pergunta5  

  

console.log("\nQual o time com a maior torcida do mundo ?")  

  

console.log("A - Barcelona (Espanha)")  

  

console.log("B - Flamengo (Brasil)")  

  

console.log("C - Corinthians (Brasil)")  

  

console.log("D - Real Madrid (Espanha)")  

  

let pergunta5 = prompt("\nDigite a resposta: ")  

  

if (pergunta5 == "A"){  

  

    console.log("\nAlternativa correta")  

  

    respostaCorreta ++  
  

}  

else{  

  

     console.log("\nResposta Errada: \n � correta � A") 

  

    respostaIncorreta ++  

}  

  

   

  

// Exibir o resultado  

  

console.log("\n Resumo final")  

  

console.log("Resposta Correta: " + respostaCorreta)  

  

console.log("Resposta Incorreta: " + respostaIncorreta)  

  

   

  

   

  

   

  

//Pergunta6  

  

console.log("\nQual o jogador mais rico do mundo ?")  

  

console.log("A - Matheiu Flamini")  

  

console.log("B - David Beackham")  

  

console.log("C - Neymar")  

  

console.log("D - Faiq Bolkiah")  

  

let pergunta6 = prompt("\nDigite a resposta: ")  

  

if (pergunta6 == "D"){  

  

    console.log("\nAlternativa correta")  

  

    respostaCorreta ++  

}  
  

else{  

 
  console.log("\nResposta Errada: \n � correta � D") 

  

    respostaIncorreta ++  

}  

  

  

// Exibir o resultado  

  

console.log("\n Resumo final")  

  

console.log("Resposta Correta: " + respostaCorreta)  

  

console.log("Resposta Incorreta: " + respostaIncorreta)  

  

   

  

   

  

   

  

//Pergunta7  

  

console.log("\nOnde surgiu o futebol ?")  

  

console.log("A - Brasil")  

  

console.log("B - Inglaterra")  

  

console.log("C - China")  

  

console.log("D - Mesoam�rica")  

  

let pergunta7 = prompt("\nDigite a resposta: ")  

  

if (pergunta7 == "B"){  

  

    console.log("\nAlternativa correta")  

  

    respostaCorreta ++  


}  

else{  

  

  console.log("\nResposta Errada: \n � correta � B") 

  

    respostaIncorreta ++  

}  

  

   

  

// Exibir o resultado  

  

console.log("\n Resumo final")  

  

console.log("Resposta Correta: " + respostaCorreta)  

  

console.log("Resposta Incorreta: " + respostaIncorreta)  

  

   

  

   

  

//Pergunta8  

  

console.log("\nQuem criou a primeira bola de futebol")  

  

console.log("A - Brasil")  

  

console.log("B - Inglaterra")  

  

console.log("C - China")  

  

console.log("D - Mesoam�rica")  

  

let pergunta8 = prompt("\nDigite a resposta: ")  

  

if (pergunta8 == "B"){  

  

    console.log("\nAlternativa correta")  

  

    respostaCorreta ++  

}  

  

else{  

  
     console.log("\nResposta Errada: \n � correta � B") 

    respostaIncorreta ++  

}  

  

   

  

// Exibir o resultado  

  

console.log("\n Resumo final")  

  

console.log("Resposta Correta: " + respostaCorreta)  

  

console.log("Resposta Incorreta: " + respostaIncorreta)  

  

   

  

   

  

   

  

//Pergunta9  

  

console.log("\nQual o time com maior n�meros de t�tulos do Brasil")  

  

console.log("A - S�o Paulo")  

  

console.log("B - Corinthians")  

  

console.log("C - Flamengo")  

  

console.log("D - Palmeiras")  

  

let pergunta9 = prompt("\nDigite a resposta: ")  

  

if (pergunta9 == "D"){  

  

    console.log("\nAlternativa correta")  

  

    respostaCorreta ++  


}  

  

else{  


     console.log("\nResposta Errada: \n � correta � D") 

  
    respostaIncorreta ++  

}  

  

   

  

// Exibir o resultado  

  

console.log("\n Resumo final")  

  

console.log("Resposta Correta: " + respostaCorreta)  

  

console.log("Resposta Incorreta: " + respostaIncorreta)  

  

   

  

   

  

   

  

//Pergunta10  

  

console.log("\nQual foi o time a conquistar a primeira libertadores")  

  

console.log("A - Pe�arol")  

  

console.log("B - Santos")  

  

console.log("C - Juventude")  

  

console.log("D - Palmeiras")  

  

let pergunta10 = prompt("\nDigite a resposta: ")  

  

if (pergunta10 == "A"){  

  

    console.log("\nAlternativa correta")  

  

    respostaCorreta ++  
  

}  

else{  
  

     console.log("\nResposta Errada: \n � correta � A") 

  

    respostaIncorreta ++   

}  

  

   

  

// Exibir o resultado  

  

console.log("\n Resumo final")  

  

console.log("Resposta Correta: " + respostaCorreta)  

  

console.log("Resposta Incorreta: " + respostaIncorreta) 
