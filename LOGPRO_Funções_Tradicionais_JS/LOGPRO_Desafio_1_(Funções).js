LOGPRO - Desafio 1 (Fun��es) 

 


Link do c�digo:  https://www.programiz.com/online-compiler/0nSC5XteSmKpz  






 

let numero1 = Number(prompt("Digite um n�mero: " )); 

let numero2 = Number(prompt("Digite outro n�mero: " )); 

let operacao = prompt("Escolha a opera��o: \n 1-Soma( + ), \n 2-Subitra��o( - ),\n 3-Multiplica��o( * ),\n 4-Divis�o( / ), \n Escreva ou digite a escolha :  "); 

  

  



function numeros(a, b, operacao) { 

  switch (operacao) { 


    case "+": 

        case "1": 

            case "Soma": 

       
      return a + b; 

       

      case "-" : 

          case "2": 

              case "Subitra��o": 
               

      return a - b; 

     

    case "*" : 

        case "3": 

            case "Multiplica��o": 

                 
      return a * b; 

       
    case "/" : 

        case "4": 

            case "Divis�o": 

                   

      if (b !== 0) { 

        return a / b; 

      } else { 

        return "Erro: divis�o por zero"; 

      } 

    default: 

      return "Opera��o inv�lida"; 

  } 

} 

  

let resultado = numeros(numero1, numero2, operacao); 

console.log(`\nResultado: ${resultado}`); 