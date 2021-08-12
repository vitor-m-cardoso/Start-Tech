class Data {
  // public dia: number; // public vem por default
  // mes: number;
  // ano: number;

  constructor(public dia: number, public mes: number, public ano: number = 1970) {
    // this.dia = dia;
    // this.mes = mes;
    // this.ano = ano;
  }

}

const data = new Data(1, 1, 2020);
console.log(data.dia);

const data2 = new Data(1, 1);

// Exemplo de Modificadores de acesso
class Carro {
  private velocidadeAtual: number = 0;

  constructor (
    public marca: string,
    public modelo: string,
    private velocidadeMaxima: number = 220,
  ) {}

  private alterarVelocidade(delta: number) {
    const novaVelodidade = this.velocidadeAtual + delta;

    if (novaVelodidade >= 0 && novaVelodidade <= this.velocidadeMaxima) {
      this.velocidadeAtual = novaVelodidade;
    } else {
      this.velocidadeAtual = delta > 0 ? this.velocidadeMaxima : 0
    }
  }

  acelerar() {
    this.alterarVelocidade(5);
  }

  frear() {
    this.alterarVelocidade(-5);
  }
}

const carro = new Carro('Chevrolet', 'Prisma', 250);
carro.acelerar();

// Exemplo do conceito de Heranca
class Camaro extends Carro { // herda tudo da classe Carro
  private turbo = false;

  constructor() {
    super('Chevrolet', 'Camaro', 280); // utilizado para chamar a classe pai para utilizar suas propriedades
  }

  ligarTurbo() {
    this.turbo = true;
  }
}

const camaro = new Camaro();
camaro.acelerar();
camaro.frear();
camaro.ligarTurbo();
