const cliente = 
[{
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
    },
  {
    nome: "Juliana",
    cpf: "4444444444444",
    idade: 90,
    email: "juliana@juliana.com",
    dependentes: [{
      nome: "Linca",
      parentesco: "Filha",
      dataDeNascimento: "30/08/2020"
    }]
  }
]
// "..." operador de espalhamento, acessa o cliente[0] e espalhou dentro de cliente[0].dependentes
// O operador retira os elementos de um array e coloca eles espalhados dentro de um único array
const listaDependentes = [...cliente[0].dependentes,...cliente[1].dependentes]
console.table(listaDependentes)