function validateCpf(cpf) {
  if (cpf.length != 11) {
    return false;
  } else {
    var num = cpf.substring(0, 9);
    var digits = cpf.substring(9);
    var sum = 0;

    for (var index = 10; index > 1; index --) {
      sum += num.charAt(10 - index) * index;
    }
    var result = (sum % 11) < 2 ? 0 : 11 - (sum % 11);

    // valida primeiro digito
    if (result != digits.charAt(0)) {
      return false
    }

    sum = 0;
    num = cpf.substring(0, 10);

    for (var newIndex = 11; newIndex > 1; newIndex --) {
      sum += num.charAt(11 - newIndex) * newIndex;
    }
    var result = sum % 11 < 2 ? 0 : 11 - (sum % 11);
  
    // valida segundo digito
    if (result != digits.charAt(1)) {
      return false;
    }

    return true;
  }
}

function validate() {
  var cpf = document.getElementById('cpf_digitado').value;
  var validationResult = validateCpf(cpf);
  document.getElementById('success').style.display = 'none'
  document.getElementById('error').style.display = 'none'

  if (validationResult) {
    document.getElementById('success').style.display = 'block';
  } else {
    document.getElementById('error').style.display = 'block';
  }
}
