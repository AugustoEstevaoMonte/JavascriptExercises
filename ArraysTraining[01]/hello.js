const salaJS = [7,8,8,7,19,6.5,4,10,7]
const salaJava = [6,5,8,9,5,6]
const salaPython = [7,3.5,8,9.5]

const meanOfClassroom = (notesClassroom) => {
  const sumOfNotes = notesClassroom.reduce((acumulador,atual) => atual+acumulador,0)
  return sumOfNotes/notesClassroom.length;
}
console.log(meanOfClassroom(salaPython))