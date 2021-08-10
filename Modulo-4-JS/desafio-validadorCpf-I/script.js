function validateCpf(cpf) {
  if (cpf.length != 11) {
    return false;
  } else {
    let num = cpf.substring(0, 9);
    let digits = cpf.substring(9);
    let sum = 0;

    for (let index = 10; index > 1; index --) {
      sum += num.charAt(10 - index) * index;
    }
    let result = (sum % 11) < 2 ? 0 : 11 - (sum % 11);

    // valida primeiro digito
    if (result != digits.charAt(0)) {
      return false
    }

    sum = 0;
    num = cpf.substring(0, 10);

    for (let newIndex = 11; newIndex > 1; newIndex --) {
      sum += num.charAt(11 - newIndex) * newIndex;
    }
  
    result = sum % 11 < 2 ? 0 : 11 - (sum % 11);
  
    // valida segundo digito
    if (result != digits.charAt(1)) {
      return false;
    }

    return true;
  }
}

function validate() {
  const cpf = document.getElementById('cpf_digitado').value;
  const validationResult = validateCpf(cpf);
  document.getElementById('success').style.display = 'none'
  document.getElementById('error').style.display = 'none'

  if (validationResult) {
    document.getElementById('success').style.display = 'block';
  } else {
    document.getElementById('error').style.display = 'block';
  }
}
