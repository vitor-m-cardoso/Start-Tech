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
    // VALIDAR ACELERACAO E RENAGEM
    // this.velocidadeAtual = xxx
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
