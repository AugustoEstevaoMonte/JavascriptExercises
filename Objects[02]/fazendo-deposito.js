const cliente = {
  nome: "André",
  idade: 36,
  cpf: "123456789",
  email: "andre@andre.com",
  fones: ["5599999999","5699393933"],
  dependentes: [{
    nome: "Sarah",
    parentesco: "filha",
    dataDeNascimento: "20/03/2022",
  },{
    nome: "Santa Claus",
    parentesco: "Pai",
    dataDeNascimento: "04/01/2014"
  }],
  saldo: 100,
  depositar: function(valor){return this.saldo+=valor}
}
console.log(cliente.saldo)
console.log(cliente.depositar(200))
