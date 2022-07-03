class Cliente
{
  // #variavel = torna o campo privado
  constructor(nome,email,cpf,saldo){
    this.nome = nome;
    this.email = email;
    this.cpf = cpf;
    this.saldo = saldo;
  }
  depositar(valor){
    this.saldo += valor;
  }

  exibirSaldo(){
    return console.log(this.saldo);
  }
}

class ClientePoupanca extends Cliente
{
  constructor(nome,email,cpf,saldo,saldoPoupanca){
    super(nome,email,cpf,saldo)
    this.saldoPoupanca = saldoPoupanca
  }

  depositarPoupanca(valor){
    this.saldoPoupanca += valor;
  }
}

const fred = new ClientePoupanca("Frederic","a@gmail.com","0000000000",100,500)
fred.depositarPoupanca(200)
fred.depositar(199)
fred.exibirSaldo()
console.log(fred)