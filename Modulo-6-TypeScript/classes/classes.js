"use strict";
class Data {
    // public dia: number; // public vem por default
    // mes: number;
    // ano: number;
    constructor(dia, mes, ano = 1970) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
        // this.dia = dia;
        // this.mes = mes;
        // this.ano = ano;
    }
}
const data = new Data(1, 1, 2020);
console.log(data.dia);
const data2 = new Data(1, 1);
