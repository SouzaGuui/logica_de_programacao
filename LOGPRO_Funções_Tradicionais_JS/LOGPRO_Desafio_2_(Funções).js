
LOGPRO - Desafio 2 (Funções) 

 

1- Código com apenas um usuário. 

 

1- Link do código para teste: https://www.programiz.com/online-compiler/5zoYGKYNF21FN  

 

1- Código escrito: 

 

let usuario1 = "souzaleite"; 

let senha1 = "12345678";  

  

let pergunta1 = prompt("digite o email de usuário: "); 

let pergunta2 = prompt("digite a senha: "); 

  

function verificar(login, senha){ 

    if (login === usuario1 && senha === senha1){ 

        return "Acesso liberado"; 

    } else { 

        return "Acesso negado"; 

    } 

} 

  

let resultado = verificar(pergunta1, pergunta2); 

console.log(resultado); 

 

 

 




 

2- Código com dez um usuário. 

 

2- Link do código para teste: https://www.programiz.com/online-compiler/84Xs1oQkpwWFk  

 






2- Código escrito: 

 

let usuario1 = "souzaleite"; 

let senha1 = "souza538"; 

  

let usuario2 = "joaosilva"; 

let senha2 = "123joao"; 

  

let usuario3 = "mariaribeiro"; 

let senha3 = "a12345"; 

  

let usuario4 = "pedrocosta"; 

let senha4 = "senha456"; 

  

let usuario5 = "anaoliveira"; 

let senha5 = "minhasenha"; 

  

let usuario6 = "lucasmendes"; 

let senha6 = "lucas2024"; 

  

let usuario7 = "carlarocha"; 

let senha7 = "carla@123"; 

  

let usuario8 = "andrefernando"; 

let senha8 = "andrepass"; 

  

let usuario9 = "julianalima"; 

let senha9 = "juliana01"; 

  

let usuario10 = "felipemartins"; 

let senha10 = "felipe321"; 

  

let pergunta1 = prompt("digite o email de usuário: "); 

let pergunta2 = prompt("digite a senha: "); 

  

function verificar(login, senha) { 

    if (login === usuario1 && senha === senha1) { 

        return "Acesso liberado"; 

    } else if (login === usuario2 && senha === senha2) { 

        return "Acesso liberado"; 

    } else if (login === usuario3 && senha === senha3) { 

        return "Acesso liberado"; 

    } else if (login === usuario4 && senha === senha4) { 

        return "Acesso liberado"; 

    } else if (login === usuario5 && senha === senha5) { 

        return "Acesso liberado"; 

    } else if (login === usuario6 && senha === senha6) { 

        return "Acesso liberado"; 

    } else if (login === usuario7 && senha === senha7) { 

        return "Acesso liberado"; 

    } else if (login === usuario8 && senha === senha8) { 

        return "Acesso liberado"; 

    } else if (login === usuario9 && senha === senha9) { 

        return "Acesso liberado"; 

    } else if (login === usuario10 && senha === senha10) { 

        return "Acesso liberado"; 

    } else { 

        return "Acesso negado"; 

    } 

} 

  

let resultado = verificar(pergunta1, pergunta2); 

console.log(resultado); 