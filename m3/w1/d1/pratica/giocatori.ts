let gamer1:number= 1
let gamer2:number=99

function confronto(num1,num2){

  let numero = Math.floor((Math.random()*(100-1))+1);

  let diff1=Math.abs(numero-num1), diff2= Math.abs(numero-num2);
  console.log('numero casuale generato= ', numero)

  if(numero === num1){
    console.log('il giocatore n1 ha indovinato \n');
    
  }else if (numero === num2){
    console.log('il giocatore n2 ha indovinato \n');
  }else if (diff1<diff2){
    console.log('nessuno dei due ha azzeccato il numero casuale, ma il giocatore 1 si è avvicinato di più!');
    
  }else{
    console.log('nessuno dei due ha azzeccato il numero casuale, ma il giocatore 2 si è avvicinato di più');
    
  }
};

confronto(gamer1,gamer2);