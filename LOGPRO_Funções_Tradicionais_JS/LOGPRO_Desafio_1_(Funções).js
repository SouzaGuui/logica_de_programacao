LOGPRO - Desafio 1 (Funções) 

 


Link do código:  https://www.programiz.com/online-compiler/0nSC5XteSmKpz  






 

let numero1 = Number(prompt("Digite um número: " )); 

let numero2 = Number(prompt("Digite outro número: " )); 

let operacao = prompt("Escolha a operação: \n 1-Soma( + ), \n 2-Subitração( - ),\n 3-Multiplicação( * ),\n 4-Divisão( / ), \n Escreva ou digite a escolha :  "); 

  

  



function numeros(a, b, operacao) { 

  switch (operacao) { 


    case "+": 

        case "1": 

            case "Soma": 

       
      return a + b; 

       

      case "-" : 

          case "2": 

              case "Subitração": 
               

      return a - b; 

     

    case "*" : 

        case "3": 

            case "Multiplicação": 

                 
      return a * b; 

       
    case "/" : 

        case "4": 

            case "Divisão": 

                   

      if (b !== 0) { 

        return a / b; 

      } else { 

        return "Erro: divisão por zero"; 

      } 

    default: 

      return "Operação inválida"; 

  } 

} 

  

let resultado = numeros(numero1, numero2, operacao); 

console.log(`\nResultado: ${resultado}`); 