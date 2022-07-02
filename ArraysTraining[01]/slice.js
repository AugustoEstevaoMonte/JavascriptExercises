const namesAndNotes = [['Augusto','Gabriel','Fernanda'],[9.0,8.0,7.0]]

const arrayDivision = (nameAndNote) => {
  return nameAndNote[0].slice(1,3);
}
console.log(arrayDivision(namesAndNotes))