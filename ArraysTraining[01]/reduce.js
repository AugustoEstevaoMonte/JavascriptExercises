const notas = [9.0,8.0,7.0,6.0,5.5,3.5,0,0.5]

const meanOfNotes = (nota) => {
  const result = nota.reduce((acumulador,atual) => atual+acumulador,0)
  return result / nota.length;
}
console.log(meanOfNotes(notas))