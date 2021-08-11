// tipo Boolean
const contaPaga: boolean = false;

// tipo Number
const idade: number = 23;
const avaliacao: number = 4.5;

// tipo String
const nome: string = 'Vitor Cardoso';

// tipo Array (de numeros)
const idades: number[] = [23, 28, 45];
// outra forma do tipo array (menos utilizada)
const idades2: Array<number> = [23, 28, 45, 4231];

// tipo Tuple (pouco utilizado). definir quantas posicoes existem no array.
let jogadores: [string, string, string];
jogadores = ['Vitor', 'Fulano', 'Ciclano'];

// tipo Enum
enum StatusAprovacao {
  Aprovado, //por padrao 0
  Pendente, //por padrao 1
  Rejeitado, //por padrao 2
}
const statusDaAprovacao: StatusAprovacao = StatusAprovacao.Aprovado;

// tipo Any (nao recomendado a utilizacao, apenas em alguns casos especificos)
const retornoApi: any[] = [123, 'Vitor', false, '213'];

// tipo Void (utilizado em funcoes quando a funcao nao retorna nada)
function printarNaTela(msg: string): void {
  console.log(msg);
}

// tipo Null e Undefined
const u: undefined = undefined;
const n: null = null;

// tipo Object
function criar(obj: object) {
  //... algum objeto = {}
}

// tipo Never (quase nunca e utilizado)
function loopInfinito(): never {
  while(true) { }
}

function erro(mensagem: string): never {
  throw new Error(mensagem);
}

function falha() {
  return erro('algo falhow');
}

// Union Types (quando existe mais de um tipo)
const nota: string | number = 5;
function exibirNota(nota: number | string) {
  console.log(`A nota e: ${nota}`);
}
exibirNota('10'); // aceita string
exibirNota(10); // aceita number

// tipo Alias (para criar "apelidos" a tipos)
type Funcionario = {
  nome: string;
  sobrenome: string;
  dataNascimento: Date;
}

const funcionarios: Funcionario[] = [{
  nome: 'Vitor',
  sobrenome: 'Cardoso',
  dataNascimento: new Date(),
},
{
  nome: 'Fulano',
  sobrenome: 'Steve',
  dataNascimento: new Date(),
}];

function tratarFuncionarios(funcionarios: Funcionario[]) {
  for (let funcionario of funcionarios) {
    console.log('Nome do funcionario', funcionario.nome)
  }
}

// Valores nulos ou opcionais (null ou undefined)
let altura: number | null = 1.6;
altura = null;

type Contato = {
  nome: string;
  telefone1: string;
  telefone2?: string; // ? - campo opcional
}

const contato: Contato = {
  nome: 'Vitor',
  telefone1: '12345676',
}

// tipo Type Assertion
const minhaIdade: any = 23;
(minhaIdade as number).toString(); // a partir daqui ele sera declarado como number

const input = document.getElementById('exemplo1') as HTMLInputElement; // primeira forma 
console.log(input.value);

const input2 = <HTMLInputElement>document.getElementById('exemplo2'); // segunda forma
console.log(input2.value);