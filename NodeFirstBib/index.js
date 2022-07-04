import  chalk  from 'chalk';
import fs from 'fs';
// Ou const fs = require('fs')

const getArchive = (pathToArchive) => {
  // Passando promisses estamos falando, "leve o tempo que for para você ler o arquivo espere isso acontecer e execute a função correspondente"
  fs.promises.readFile(pathToArchive,"utf-8")
    //.then = então, "Javascript vai lá com o método fs com read file então, depois que terminar de ler o arquivo execute isso aqui"
    .then((texto) => console.log(chalk.green(texto)))
    .catch((err) => {throw new Error(chalk.red(err))})
}

getArchive("arquivos/texto1.md")

/*const getArchive = (pathToArchive) => {
  fs.readFile(pathToArchive,'utf-8',(err,data) => {
    if(err)
      throw new Error(chalk.red(err));
    console.log(chalk.green(data))
  })
}

getArchive("arquivos/texto1.md")
/*
/*const sayHello = (text) => {
  return console.log(chalk.green((`Hello ${text}`)));
}
sayHello("Gabriel")*/