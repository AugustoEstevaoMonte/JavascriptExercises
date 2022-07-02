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
  }]
}

cliente.dependentes.push({
  nome: "Santa Claus",
  parentesco: "Pai",
  dataDeNascimento: "04/01/2014"
})

const getOlderDependent = (cliente) => {
  let result = cliente.dependentes.filter(dependent => dependent.dataDeNascimento==="04/01/2014")
  return result;
}

console.log(getOlderDependent(cliente))