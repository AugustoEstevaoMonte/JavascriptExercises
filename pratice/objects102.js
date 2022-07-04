class Carro
{
  #modelo
  #placa
  #chassi
  constructor(modelo,placa,chassi)
  {
    this.#modelo = modelo;
    this.#placa = placa;
    this.#chassi = chassi;
  }

  set modelo(model)
  {
    if(model.length <= 0)
      throw new Error("Modelo inválido!");
    this.#modelo = model;
  }

  set placa(placa){
    if(placa.length <= 0)
      throw new Error("Placa inválida!")
    this.#placa = placa;
  }

  set chassi(chassi){
    if(chassi.length<=4)
      throw new Error("Chassi inválido");
    this.#chassi = chassi;
  }

  get modelo(){
    return this.#modelo;
  }

  get placa(){
    return this.#placa;
  }

  get chassi(){
    return this.#chassi;
  }

  showAllInfosAboutCar(){
    console.log(`A placa é: ${this.#placa}`);
    console.log(`O chassi é: ${this.#chassi}`);
    console.log(`O modelo é: ${this.#modelo}`);
  }
}

class Moto extends Carro
{
  #categoryOfPilot;
  constructor(modelo,placa,chassi, categoryOfPilot)
  { 
    super(modelo,placa,chassi)
    this.#categoryOfPilot = categoryOfPilot;
  }
}

const ferrari = new Carro("Ferrari","PJK-9090","DSDADEEI3U7")
const harley = new Moto("Harley devidson","PLP-3434","HUUHER3U45","Categoria B")
//console.log(ferrari.chassi)
harley.showAllInfosAboutCar()