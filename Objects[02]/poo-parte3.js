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

const rodil = new Cliente("Augusto","a@gmail.com","0000000000",100)
rodil.exibirSaldo()