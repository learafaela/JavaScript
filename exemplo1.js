//Comentário de uma linha

/*
 Comentário de múltiplas linhas
 */
// Declarando variáveis
let nome="João";
let idade=25;

//Estruturas de Controle(if,else)
if(idade>=18){
    console.log(nome+"é maior de idade.");
}else{
    console.log(nome+"é menor de idade.");
}
//Loops (for)
for(let i=0;i<5;i++){
    console.log("Número:"+i);
}
//Funções 
function saudacao(){
    console.log("Olá,"+nome+"!");
}
//Chamando a função
saudacao()