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

let relatorio = ""
// Uso do método For..in ideal para objetos
for(let info in cliente){
  if(typeof cliente[info] === "object" || typeof cliente[info] === "function")
    continue;
  else
    //Quebra de linhas para formatar melhor as informações do objeto.
    relatorio+= `
    ${info} ==>  ${cliente[info]}
    `
}

console.log(relatorio)
