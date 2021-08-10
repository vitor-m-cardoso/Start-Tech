const cpf = 'Meu CPF e 123.456.789-22';
const regex = /[0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}/;

console.log(cpf.match(regex));
