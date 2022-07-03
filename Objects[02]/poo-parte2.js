function Cliente(nome,cpf,email,saldo)
{
  this.nome = nome;
  this.cpf = cpf;
  this.email = email;
  this.saldo = saldo;
  this.depositar = (valor) => {return this.saldo+=valor};
}


function ClientePopupanca(nome,cpf,email,saldo,saldoPoup)
{
  Cliente.call(this,nome,cpf,email,saldo) //Herdou as caracteristicas de Cliente
  this.saldoPoup = saldoPoup;
}

const lucas = new ClientePopupanca("Albertino","0000000","a@a.hotmail",1000,500)
console.log(lucas)

ClientePopupanca.prototype.depositarPoup = function(valor){
  this.saldoPoup += valor;
}
lucas.depositarPoup(100)
console.log(lucas.saldoPoup)