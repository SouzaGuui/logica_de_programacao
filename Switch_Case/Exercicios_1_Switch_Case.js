







Exerc�cios 1 - Switch Case 








Exerc�cio 1: Crie um script que exiba diferentes sauda��es com base no idioma escolhido (Portugu�s, Ingl�s, Espanhol, etc). 

 

 

let idioma = prompt("Escolha um idioma que deseja ser recepcionado:\n1-Portugu�s\n2-Ingl�s\n3-Espanhol\nDigite o n�mero ou escreva a l�ngua desejada:  "); 

  

idioma = idioma.toLowerCase(); 

  

switch (idioma) { 

case 'portugu�s': 

case'portugues': 

case'1': 

console.log("\nOl�! Como vai voc�?"); 

         

break; 

  

case 'ingl�s': 

case'ingles': 

case'2': 

console.log("\nHello! How are you?"); 

         

break; 

  

case 'espanhol': 

case'3': 

console.log("\n!Hola!? C�mo est�s?"); 

  

break; 

  

default: 

console.log("Idioma n�o reconhecido. Tente novamente."); 

} 

 

 

 

 

 

Exerc�cio 2: Escreva um c�digo que exiba os dias da semana com base no n�mero fornecido (1 para domingo, 2 para segunda-feira, etc.). 

let numero = prompt("Digite um n�mero de 1 a 7 para saber o dia da semana: "); 

numero = Number(numero); 

  

switch (numero) { 

    case 1: 

        console.log("Domingo"); 

        break; 

    case 2: 

        console.log("Segunda-feira"); 

        break; 

    case 3: 

        console.log("Ter�a-feira"); 

        break; 

    case 4: 

        console.log("Quarta-feira"); 

        break; 

    case 5: 

        console.log("Quinta-feira"); 

        break; 

    case 6: 

        console.log("Sexta-feira"); 

        break; 

    case 7: 

        console.log("S�bado"); 

        break; 

    default: 

        console.log("N�mero inv�lido. Digite um n�mero entre 1 e 7."); 

} 

Exerc�cio 3: Escreva um script que exiba diferentes tipos de transporte com base no n�mero fornecido (1 para carro, 2 para bicicleta, 3 para �nibus, etc.). 

 

let numero = prompt("Digite um n�mero de 1 a 5 para escolher o tipo de transporte:\n1-Carro\n2-Bicicleta\n3-�nibus\n4-Metr�\nDigite o numero desejado: "); 

  

numero = Number(numero);  

  

switch (numero) { 

    case 1: 

        console.log("Voc� escolheu o Carro."); 

        break; 

    case 2: 

        console.log("Voc� escolheu a Bicicleta."); 

        break; 

    case 3: 

        console.log("Voc� escolheu o �nibus."); 

        break; 

    case 4: 

        console.log("Voc� escolheu o Metr�."); 

        break; 

  

    default: 

        console.log("N�mero inv�lido. Por favor, digite um n�mero entre 1 e 5."); 

} 

 

 

 

 

 

Exerc�cio 4: Desenvolva um programa que classifique diferentes n�veis de urg�ncia com base em um n�mero fornecido (1 para baixa, 2 para m�dia, 3 para alta). 

 

let numero = prompt("Digite um n�mero para classificar o n�vel de urg�ncia:\n1-Baixo\n2-M�dia\n3-Alta\nDigite um n�mero para sua urg�ncia: "); 

  

numero = Number(numero); 

  

switch (numero) { 

    case 1: 

        console.log("Urg�ncia Baixa"); 

        break; 

    case 2: 

        console.log("Urg�ncia M�dia"); 

        break; 

    case 3: 

        console.log("Urg�ncia Alta"); 

        break; 

    default: 

        console.log("N�mero inv�lido. Por favor, digite um n�mero entre 1 e 3."); 

} 

 

 

 

 

 

 

 

 

 

Exerc�cio 5: Crie um c�digo que exiba diferentes tipos de ve�culos com base na categoria (compacto, SUV, caminh�o). 

 

let categoria = prompt("Digite o n�mero para escolher a categoria de ve�culo:\n1-para Compacto\n2-para SUV\n3-para Caminh�o"); 

  

categoria = Number(categoria);  

  

switch (categoria) { 

    case 1: 

        console.log("Voc� escolheu um ve�culo Compacto."); 

        break; 

    case 2: 

        console.log("Voc� escolheu um SUV."); 

        break; 

    case 3: 

        console.log("Voc� escolheu um Caminh�o."); 

        break; 

    default: 

        console.log("N�mero inv�lido. Por favor, digite um n�mero entre 1 e 3."); 

} 

 

 

 

 

 

 

 

 

 

Exerc�cio 6: Desenvolva um programa que calcule diferentes tarifas de estacionamento com base na dura��o do tempo estacionado. 

let tempoEstacionado = prompt("Digite o tempo estacionado em horas (ex: 1, 2, 3, etc.):"); 

  

tempoEstacionado = Number(tempoEstacionado); 

  

let tarifa; 

  

switch (true) { 

    case (tempoEstacionado <= 1): 

        tarifa = 5;  

        console.log(`Tarifa de estacionamento: R$ ${tarifa}`); 

        break; 

    case (tempoEstacionado > 1 && tempoEstacionado <= 3): 

        tarifa = 10;  

        console.log(`Tarifa de estacionamento: R$ ${tarifa}`); 

        break; 

    case (tempoEstacionado > 3 && tempoEstacionado <= 6): 

        tarifa = 20;  

        console.log(`Tarifa de estacionamento: R$ ${tarifa}`); 

        break; 

    case (tempoEstacionado > 6): 

        tarifa = 30;  

        console.log(`Tarifa de estacionamento: R$ ${tarifa}`); 

        break; 

    default: 

        console.log("Por favor, insira um valor v�lido para o tempo."); 

        break; 

} 

Exerc�cio 7: Escreva um script que exiba diferentes n�veis de dificuldade em jogos com base no n�mero fornecido (1 para f�cil, 2 para m�dio, 3 para dif�cil). 

 

let nivel = prompt("Digite um n�mero para escolher o n�vel de dificuldade do jogo.\n1-F�cil\n2-M�dio\n3-Dif�cil\nQual ser� a dificuldade: ").toLowerCase(); 

  

switch (nivel) { 

    case '1': 

    case 'f�cil': 

    case'facil': 

         

    console.log("Voc� escolheu o n�vel F�cil."); 

    break; 

     

    case '2': 

    case 'M�dio': 

    case 'Medio': 

                 

    console.log("Voc� escolheu o n�vel M�dio."); 

     

    break; 

     

    case '3': 

        case 'Dif�cil': 

            case 'dificil': 

        console.log("Voc� escolheu o n�vel Dif�cil."); 

        break; 

    default: 

        console.log("N�mero inv�lido. Digite novamente"); 

}  

Exerc�cio 8: Crie um c�digo que determine diferentes tipos de servi�os oferecidos por uma academia com base na categoria (aula de yoga, muscula��o, personal trainer). 

 

let categoria = prompt("Qual servi�o voc� deseja usar em nossa academia:\n1-yoga\n2-Muscula��o\n3-Personal Trainer\nDigite o numero da sua escolha: ") 

  

categoria = Number(categoria) 

  

switch(categoria){ 

  

case 1: 

console.log("Voc� escolheu yoga"); 

  

break; 

  

case 2: 

    console.log("Voc� escolheu Muscula��o"); 

     

    break; 

  

case 3 : 

    console.log("Voc� escolheu Personal Trainer"); 

     

    break; 

     

    default: 

    console.log("\nDigite um numero de 1 a 3 por favor"); 

} 

 

 

Exerc�cio 9: Escreva um script que exiba diferentes pre�os de ingressos para um evento com base na categoria escolhida (estudante, meia entrada, inteira). 

 

let categoria = prompt("Qual � a categoria que voc� escolheu para o seu ingresso:\nEstudante\nMeia\nInteira\nEscreva a sua op��o: "); 

  

categoria = categoria.toLowerCase();  

  

let preco; 

  

switch (categoria) { 

    case "estudante": 

        preco = 20.00; 

        console.log("\nCategoria: Estudante - Pre�o: R$ " + preco.toFixed(2)); 

        break; 

    case "meia": 

        preco = 30.00; 

        console.log("\nCategoria: Meia Entrada - Pre�o: R$ " + preco.toFixed(2)); 

        break; 

    case "inteira": 

        preco = 60.00; 

        console.log("\nCategoria: Inteira - Pre�o: R$ " + preco.toFixed(2)); 

        break; 

    default: 

        console.log("\nCategoria inv�lida. Digite: estudante, meia ou inteira."); 

} 

 

 

 

 

Exerc�cio 10: Crie um c�digo que determine diferentes n�veis de dificuldade em exerc�cios f�sicos com base na faixa et�ria do praticante. 

 

let idade = prompt("Digite sua idade:"); 

idade = Number(idade);  

  

let faixaEtaria; 

  

switch (true) { 

    case (idade >= 0 && idade <= 12): 

        faixaEtaria = "Infantil"; 

        console.log("Faixa Et�ria: Infantil - N�vel de dificuldade: Leve"); 

        break; 

    case (idade >= 13 && idade <= 17): 

        faixaEtaria = "Adolescente"; 

        console.log("Faixa Et�ria: Adolescente - N�vel de dificuldade: Moderado"); 

        break; 

    case (idade >= 18 && idade <= 59): 

        faixaEtaria = "Adulto"; 

        console.log("Faixa Et�ria: Adulto - N�vel de dificuldade: Intenso"); 

        break; 

    case (idade >= 60): 

        faixaEtaria = "Idoso"; 

        console.log("Faixa Et�ria: Idoso - N�vel de dificuldade: Leve a Moderado"); 

        break; 

    default: 

        console.log("Idade inv�lida. Por favor, insira um n�mero positivo."); 

} 

 

 

Exerc�cio 11: Desenvolva um programa que exiba diferentes tipos de instrumentos musicais com base no g�nero musical. 

 

let genero = prompt("Digite um g�nero musical (rock, samba, sertanejo ou Cl�ssica):"); 

genero = genero.toLowerCase();  

switch (genero) { 

    case "rock": 

        console.log("Instrumento recomendado: Guitarra El�trica"); 

        break;   

    case "samba": 

        console.log("Instrumento recomendado: Pandeiro "); 

        break; 

        case "sertanejo": 

        console.log("Instrumento recomendade:Viol�o "); 

        break; 

    case "cl�ssica": 

        console.log("Instrumento recomendado: Piano "); 

        break; 

default: 

        console.log("G�nero musical n�o reconhecido. Tente: rock, samba, sertanejo ou Cl�ssico."); 

} 

 

 

 

 

 

 

 

 

Exerc�cio 12: Crie um c�digo que exiba diferentes tipos de cursos oferecidos em uma escola de tecnologia com base na �rea (front-end, back-end, mobile). 

 

let area = prompt("Digite a �rea de interesse (front-end, back-end, mobile):"); 

area = area.toLowerCase();  

  

switch (area) { 

    case "front-end": 

        console.log("Cursos oferecidos para Front-End: HTML, CSS, JavaScript, React, Angular"); 

        break; 

    case "back-end": 

        console.log("Cursos oferecidos para Back-End: Node.js, Python, Ruby, Java, PHP"); 

        break; 

    case "mobile": 

        console.log("Cursos oferecidos para Mobile: React Native, Flutter, Kotlin, Swift"); 

        break; 

    default: 

        console.log("�rea n�o reconhecida. Tente: front-end, back-end ou mobile."); 

} 

 

 

 

 

 

 

 

 

 

Exerc�cio 13: Desenvolva um programa que determine diferentes n�veis de habilidade em esportes com base na idade do atleta. 

let idade = prompt("Informe a idade do atleta: ") 

  

switch (true) { 

    case (idade > 0 && idade <= 8): 

         

    console.log("\nFaixa et�ria: Infantil\nN�vel de habilidade: Iniciante\nCaracter�sticas: Coordena��o motora em desenvolvimento, jogos l�dicos e atividades b�sicas."); 

        break; 

    case (idade <= 14): 

    console.log("Faixa et�ria: Pr�-adolescente\nN�vel de habilidade: Intermedi�rio\nCaracter�sticas: Desenvolvimento t�cnico e motor, introdu��o a regras e t�ticas."); 

        break; 

    case (idade <= 25): 

    console.log("Faixa et�ria: Jovem/Adulto\nN�vel de habilidade: Avan�ado\nCaracter�sticas: Alta performance, treinos intensos, competi��es e estrat�gias complexas."); 

        break; 

    case (idade <= 40): 

    console.log("Faixa et�ria: Adulto\nN�vel de habilidade: Avan�ado\nCaracter�sticas: Manuten��o da performance, experi�ncia t�tica, foco em resist�ncia e recupera��o."); 

        break; 

    case (idade > 40): 

    console.log("Faixa et�ria: Master\nN�vel de habilidade: Adaptado\nCaracter�sticas: Treinos com foco em sa�de, longevidade e t�cnicas ajustadas para o corpo."); 

        break; 

    default: 

        console.log("Idade inv�lida. Por favor, digite um n�mero positivo.") 

} 

 








Exerc�cio 14: Escreva um script que exiba diferentes n�veis de dificuldade em desafios matem�ticos com base na categoria (b�sico, intermedi�rio, avan�ado). 

 

let categoria = prompt("Escolha a categoria do desafio matem�tico (b�sico, intermedi�rio ou avan�ado):"); 

categoria = categoria.toLowerCase();  

  

switch (categoria) { 

    case "b�sico": 

        console.log("Desafios de n�vel B�sico: Opera��es com n�meros inteiros, adi��o, subtra��o, multiplica��o e divis�o."); 

        break; 

    case "intermedi�rio": 

        console.log("Desafios de n�vel Intermedi�rio: Fra��es, porcentagens, pot�ncias, equa��es de 1� grau."); 

        break; 

    case "avan�ado": 

        console.log("Desafios de n�vel Avan�ado: Equa��es de 2� grau, fun��es, trigonometria, an�lise combinat�ria."); 

        break; 

    default: 

        console.log("Categoria inv�lida. Tente: b�sico, intermedi�rio ou avan�ado."); 

} 