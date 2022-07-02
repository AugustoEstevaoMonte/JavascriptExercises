const nomes = ['Augusto','Luiz','Klaus','Alex']
const removeName = (name) => {
  if(nomes.includes(name)){
    let ind = nomes.indexOf(name)
    let removedElement = nomes.splice(ind,1)
    return removedElement;
  }else{
    throw new Error("Nenhum nome encontrado!")
  }
}
console.log(removeName('Klau'))