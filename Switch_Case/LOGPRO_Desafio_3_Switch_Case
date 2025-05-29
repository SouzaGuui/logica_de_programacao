


Desafio Prático: Simulador de Terminal com switch case (JS) 



?? Descrição da Atividade 

Você foi contratado para desenvolver um simulador de terminal interativo em JavaScript, onde o usuário poderá escolher entre um ambiente Linux ou CMD (Windows) e digitar comandos como se estivesse no terminal real. 

O sistema, por sua vez, vai responder explicando o que o comando faz e dando um exemplo de como usá-lo. 

Seu desafio é colocar em prática o que aprendeu de lógica de programação com switch case, condicionais, e os principais comandos de sistemas operacionais. 

 





?? Objetivo 

Criar um sistema que simule o funcionamento básico de um terminal, com foco em comandos que o usuário digita e o que cada um faz. Você vai: 

Praticar estruturas de controle com switch case 

Explicar melhor comandos de terminal (Linux e CMD) 

Trabalhar com entrada e saída de dados (prompt e console.log) 

Criar um sistema interativo e funcional 

 





?? Como deve funcionar 

Ao iniciar, o programa pergunta ao usuário: 

Qual sistema você quer simular? 
1 - Linux 
2 - CMD (Windows) 
 
Digite a opção desejada: 1 
?? Modo Linux ativado! 
Digite um comando do terminal Linux: mkdir 
 
?? mkdir   
Cria uma nova pasta.   
Exemplo: mkdir novaPasta 
  

Após escolher o sistema, o usuário digita um comando no estilo terminal. 

O sistema usa switch case para verificar o comando e exibe: 

? O nome do comando 

?? Uma descrição do que ele faz 

?? Um exemplo prático de uso 

 

?? Lista de comandos para implementar 

?? Linux: 

mkdir 

ls 

cd e cd.. 

rm 

clear 

cp 

mv 

cat 

echo 

?? CMD (Windows): 

mkdir 

dir 

cd e cd.. 

del 

cls 

echo 

copy 

move 

rmdir 

exit 












Meu código fico assim : 

 

 

  let sistema = Number(prompt( 

  "Qual terminal você deseja acessar?\n" + 

  "1 - Linux\n" + 

  "2 - CMD (Windows)\n" + 

  "Digite sua escolha:" 

)); 

  

if (sistema === 1) { 

  let comando = prompt( 

    "\nVocê escolheu o Terminal Linux!\n" + 

    "Qual comando você quer saber?\n" + 

    "1 - mkdir\n2 - ls\n3 - cd\n4 - cd..\n5 - rm\n6 - clear\n7 - cp\n8 - mv\n9 - cat\n10 - echo\n\n" + 

    "Digite o número ou o nome do comando:" 

  ).toLowerCase(); 

  

  switch (comando) { 

    case '1': 

    case 'mkdir': 

      console.log("Comando: mkdir\nCria um novo diretório (pasta) no sistema de arquivos.\nMuito usado para organizar arquivos por projeto ou categoria.\nExemplo: mkdir projetos\nVocê pode criar vários de uma vez: mkdir pasta1 pasta2 pasta3"); 

      break; 

  

    case '2': 

    case 'ls': 

      console.log("Comando: ls\nLista todos os arquivos e pastas dentro do diretório atual.\nPode ser combinado com parâmetros:\n- `ls -a`: mostra arquivos ocultos\n- `ls -l`: mostra em formato de lista detalhada\nExemplo: ls -la"); 

      break; 

  

    case '3': 

    case 'cd': 

      console.log("Comando: cd\nNavega entre diretórios. Com ele, você pode entrar em uma pasta para acessar seus conteúdos.\nExemplo: cd downloads"); 

      break; 

  

    case '4': 

    case 'cd..': 

      console.log("Comando: cd..\nVolta um nível na estrutura de diretórios (diretório pai).\nExemplo: cd.."); 

      break; 

  

    case '5': 

    case 'rm': 

      console.log("Comando: rm\nRemove arquivos ou diretórios. Deve ser usado com cuidado, pois pode apagar tudo sem aviso!\nPara apagar pastas: `rm -r nomeDaPasta`\nExemplo: rm arquivo.txt"); 

      break; 

  

    case '6': 

    case 'clear': 

      console.log("Comando: clear\nLimpa todo o conteúdo visível no terminal, deixando a tela 'limpa'.\nÚtil para organização visual.\nExemplo: clear"); 

      break; 

  

    case '7': 

    case 'cp': 

      console.log("Comando: cp\nCopia arquivos e pastas de um lugar para outro.\nPara copiar diretórios, use `cp -r` (recursivo).\nExemplo: cp documento.txt copia.txt"); 

      break; 

  

    case '8': 

    case 'mv': 

      console.log("Comando: mv\nMove ou renomeia arquivos e pastas. Também serve para organizar arquivos entre pastas.\nExemplo: mv foto.png imagens/\nRenomear: mv antigo.txt novo.txt"); 

      break; 

  

    case '9': 

    case 'cat': 

      console.log("Comando: cat\nExibe o conteúdo de um arquivo diretamente no terminal.\nTambém pode ser usado para concatenar vários arquivos.\nExemplo: cat arquivo.txt"); 

      break; 

  

    case '10': 

    case 'echo': 

      console.log("Comando: echo\nMostra mensagens no terminal ou escreve texto em arquivos.\n??? Muito usado em scripts para criar conteúdo automaticamente.\nExemplo: echo 'Olá Mundo!'\nEscrever em arquivo: echo 'Texto' > arquivo.txt"); 

      break; 

  

    default: 

      console.log("X Comando não reconhecido no terminal Linux."); 

  } 

  

} else if (sistema === 2) { 

  let comando = prompt( 

    "\nVocê escolheu o Terminal CMD (Windows)!\n" + 

    "Qual comando você quer saber?\n" + 

    "1 - mkdir\n2 - dir\n3 - cd\n4 - cd..\n5 - del\n6 - cls\n7 - echo\n8 - copy\n9 - move\n10 - rmdir\n11 - exit\n\n" + 

    "Digite o número ou o nome do comando:" 

  ).toLowerCase(); 

  

  switch (comando) { 

    case '1': 

    case 'mkdir': 

      console.log("Comando: mkdir\nCria uma nova pasta no diretório atual.\nExemplo: mkdir documentos\nTambém permite criar várias: mkdir pasta1 pasta2"); 

      break; 

  

    case '2': 

    case 'dir': 

      console.log("Comando: dir\nLista os arquivos e pastas existentes no diretório atual.\nTambém mostra informações como data, hora e tamanho dos arquivos.\nExemplo: dir"); 

      break; 

  

    case '3': 

    case 'cd': 

      console.log("Comando: cd\nEntra em uma pasta específica para navegar por diretórios.\nExemplo: cd imagens"); 

      break; 

  

    case '4': 

    case 'cd..': 

      console.log("Comando: cd..\nRetorna ao diretório anterior (nível acima).\nExemplo: cd.."); 

      break; 

  

    case '5': 

    case 'del': 

      console.log("Comando: del\nApaga arquivos. Atenção: não vai para a lixeira!\nNão apaga pastas.\nExemplo: del nota.txt"); 

      break; 

  

    case '6': 

    case 'cls': 

      console.log("Comando: cls\nLimpa a tela do terminal (visual apenas).\nExemplo: cls"); 

      break; 

  

    case '7': 

    case 'echo': 

      console.log("Comando: echo\nExibe mensagens no terminal ou grava conteúdo em arquivos.\nExemplo: echo Olá Mundo!\nCriar arquivo com texto: echo Olá > saudacao.txt"); 

      break; 

  

    case '8': 

    case 'copy': 

      console.log("Comando: copy\nCopia arquivos de um local para outro.\nExemplo: copy texto.txt backup.txt\nCopiar para outra pasta: copy texto.txt C:\\Backup\\"); 

      break; 

  

    case '9': 

    case 'move': 

      console.log("Comando: move\nMove arquivos ou os renomeia.\nExemplo: move texto.txt novaPasta\\texto.txt"); 

      break; 

  

    case '10': 

    case 'rmdir': 

      console.log("Comando: rmdir\nRemove pastas vazias.\nSe tiver arquivos dentro, use `rmdir /s nome`\nExemplo: rmdir antigaPasta"); 

      break; 

  

    case '11': 

    case 'exit': 

      console.log("Comando: exit\nFecha o terminal.\nExemplo: exit"); 

      break; 

  

    default: 

      console.log("X Comando não reconhecido no CMD."); 

  } 

  

} else { 

  console.log("\nX Opção inválida. Tente novamente."); 

} 
