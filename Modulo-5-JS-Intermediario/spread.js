let lista = [1, 2, 5];
let listaIncluir = [3, 4];

// forma mais antiga;
for (let i = 0; i < listaIncluir.length; i += 1) {
  for (let j = 0; j < lista.length; j += 1) {
    if (lista[j] >= listaIncluir[i]) {
      lista.splice(j, 0, listaIncluir[i]);
      j += 1;
    }
  }
}

console.log(lista);

// forma mais dinamica;
const listResult = [1, 2, ...listaIncluir, 5];

// outro exemplo;

let arr = ['a', 'b', 'c'];
let arr2 = [...arr];

arr2.push('d');

console.log(`primeiro array: ${arr}`);
console.log(`segundo array: ${arr2}`);
