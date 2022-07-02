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

// Retorna todas as chaves do objeto (campos do objeto)

const oferecerOferta = (obj) => {
  const propsClientes = Object.keys(obj);
  if(propsClientes.includes("dependentes"))
   return console.log(`Oferta de seguro de vida para ${obj.nome}`)
  return -1;
}

console.log(oferecerOferta(cliente))
