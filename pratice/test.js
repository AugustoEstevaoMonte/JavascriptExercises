const fs = require('fs')

const getArchivePath = (archivePath) => {
  fs.promises.readFile(archivePath,"utf-8")
    .then((response) => {return console.log(response)})
}

getArchivePath("../NodeFirstBib/arquivos/texto1.md");
