function Cliente(nome,cpf,email,saldo)
{
  this.nome = nome;
  this.cpf = cpf;
  this.email = email;
  this.saldo = saldo;
  this.depositar = (valor) => {return this.saldo+=valor};
}
const andre = new Cliente("Augusto","0000000000","au@au.hotmail.",100)
console.log(andre)