let notas = [1,2,3,4,5]

const sumOfElements = (entrada) => {
  const result = entrada.reduce((acum,atual) => atual+acum,0)
  return result / notas.length;
}

console.log(`A média das notas é: ${sumOfElements(notas)}`)


const arrayDivision = (entrada) => {
  const result = entrada.slice(0,3)
  return result;
}
console.log(`A divisão resultou: ${arrayDivision(notas)}`)

const deleteNotes = (notes) => {
  notas.splice(0,3)
  return notas;
}

console.log(`Nota deletada, novo array: ${deleteNotes(notas)}`)