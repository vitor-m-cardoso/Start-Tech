let isValid = true;

// sem ternario
function verify(isValid) {
  if (isValid) {
    return true;
  } else {
    return false;
  }
}

console.log(verify(isValid)); // retorna true

// com ternario
const result = isValid ? true : false;

let zero = 0;

const numeroResultado = zero > 0 ? 0 : -1; // retorna false (-1)