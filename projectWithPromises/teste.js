/*const p = new Promise((resolve,reject) => {
  let a = 1+3;
  if(a===2)
    resolve('Sucesso!');
  else
    reject('Falhou!');
});

p.then((message) => {
  console.log(`Mensagem do then: ${message}`);
}).catch((err) => {
  console.log(`Mensagem do catch: ${err}`);
})*/

const r = async () => {
  try
  {
      const r =  2 + 2 === "4"
      console.log(printf(r))
  }catch(err){
    throw new Error(err);
  }
}
await r();