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
