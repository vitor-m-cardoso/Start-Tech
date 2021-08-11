"use strict";
// tipo Boolean
const contaPaga = false;
// tipo Number
const idade = 23;
const avaliacao = 4.5;
// tipo String
const nome = 'Vitor Cardoso';
// tipo Array (de numeros)
const idades = [23, 28, 45];
// outra forma do tipo array (menos utilizada)
const idades2 = [23, 28, 45, 4231];
// tipo Tuple (pouco utilizado). definir quantas posicoes existem no array.
let jogadores;
jogadores = ['Vitor', 'Fulano', 'Ciclano'];
// tipo Enum
var StatusAprovacao;
(function (StatusAprovacao) {
    StatusAprovacao[StatusAprovacao["Aprovado"] = 0] = "Aprovado";
    StatusAprovacao[StatusAprovacao["Pendente"] = 1] = "Pendente";
    StatusAprovacao[StatusAprovacao["Rejeitado"] = 2] = "Rejeitado";
})(StatusAprovacao || (StatusAprovacao = {}));
const statusDaAprovacao = StatusAprovacao.Aprovado;
// tipo Any (nao recomendado a utilizacao, apenas em alguns casos especificos)
const retornoApi = [123, 'Vitor', false, '213'];
// tipo Void (utilizado em funcoes quando a funcao nao retorna nada)
function printarNaTela(msg) {
    console.log(msg);
}
// tipo Null e Undefined
const u = undefined;
const n = null;
// tipo Object
function criar(obj) {
    //... algum objeto = {}
}
// tipo Never (quase nunca e utilizado)
function loopInfinito() {
    while (true) { }
}
function erro(mensagem) {
    throw new Error(mensagem);
}
function falha() {
    return erro('algo falhow');
}
// Union Types (quando existe mais de um tipo)
const nota = 5;
function exibirNota(nota) {
    console.log(`A nota e: ${nota}`);
}
exibirNota('10'); // aceita string
exibirNota(10); // aceita number
const funcionarios = [{
        nome: 'Vitor',
        sobrenome: 'Cardoso',
        dataNascimento: new Date(),
    },
    {
        nome: 'Fulano',
        sobrenome: 'Steve',
        dataNascimento: new Date(),
    }];
function tratarFuncionarios(funcionarios) {
    for (let funcionario of funcionarios) {
        console.log('Nome do funcionario', funcionario.nome);
    }
}
// Valores nulos ou opcionais (null ou undefined)
let altura = 1.6;
altura = null;
const contato = {
    nome: 'Vitor',
    telefone1: '12345676',
};
// tipo Type Assertion
const minhaIdade = 23;
minhaIdade.toString(); // a partir daqui ele sera declarado como number
const input = document.getElementById('exemplo1'); // primeira forma 
console.log(input.value);
const input2 = document.getElementById('exemplo2'); // segunda forma
console.log(input2.value);
