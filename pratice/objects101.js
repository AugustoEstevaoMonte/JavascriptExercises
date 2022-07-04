const Banco =  {
  nome: "Banco das Américas",
  idade: 90,
  clientes: 3000,
  funcionarios : 
  [
    {
      nome: "Josebaldo",
      idade: 19,
      endereco: "rua klaustro"
    },{
      nome: "Larissa",
      idade: 50,
      endereco: "Lima figueiredo"
    }
  ] 
}

const relatoryOfBank = (bank) => {
  let relatory = "";
  const fieldsOfBank = Object.keys(bank);
  if(fieldsOfBank.includes('funcionarios'))
  { 
    for(let info in Banco){
      if(typeof Banco[info] != "object"){
        relatory+= `
        ${info} => ${Banco[info]}`;
      }
    }
    return relatory;
  }
}

const helloFunctionary = [...Banco.funcionarios]

console.log(relatoryOfBank(Banco))
console.log(helloFunctionary)