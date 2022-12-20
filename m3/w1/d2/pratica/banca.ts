class Account {
    name: string;
    balance: number;
  
    constructor(name: string, balance: number) {
      this.name = name;
      this.balance = balance;
    }
  
    
    OneDeposit(amount: number): void {
      this.balance += amount;
      console.log(`Deposito di ${amount}€  sul conto di: ${this.name}`);
    }
  
    OneWithDraw(amount: number): void {
      if (this.balance >= amount) {
        this.balance -= amount;
        console.log(`Prelievo di ${amount}€ dal conto di: ${this.name}`);
      } else {
        console.log(`Saldo insufficente sul conto di: ${this.name}`);
      }
    }
  }
  
  class MotherAccount extends Account {
    addInterest(){
      this.balance *= 1.05;
      console.log(`Interesse aggiunto all'account di: ${this.name}`);
    }
  }
  
  const sonAccount = new Account("Figlio", 100);
  const motherAccount = new MotherAccount("Madre", 1000);
  
  sonAccount.OneDeposit(500)
  sonAccount.OneWithDraw(800)
  motherAccount.OneDeposit(300)
  motherAccount.OneWithDraw(200)
  motherAccount.addInterest()
  console.log(`Il saldo del figlio è di :${sonAccount.balance}€`);
  console.log(`Il saldo della madre è di :${motherAccount.balance}€`);
  