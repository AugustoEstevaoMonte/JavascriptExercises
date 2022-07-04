import fs from 'fs'


const getArchivePath = async (archivePath) =>
{
  try{
    const text = await fs.promises.readFile(archivePath,"utf-8");
    console.log(text);
  }catch(err){
    throw new Error(err)
  }
}

getArchivePath("../NodeFirstBib/arquivos/texto1.md");

/*const getArchivePath = async (archivePath) => {
  fs.promises
    .readFile(archivePath,"utf-8")
    .then((response) => {return console.log(response)})
    .catch((err) => {throw new Error(err)})
    .finally(() => {return console.log("Hello World!")});
}

getArchivePath("../NodeFirstBib/arquivos/texto1.md");
*/