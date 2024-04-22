let displayValue = '';

function appendToDisplay(value) {
  displayValue += value;
  document.getElementById('display').value = displayValue;
}

function clearDisplay() {
  displayValue = '';
  document.getElementById('display').value = displayValue;
}

function operate(operator) {
  displayValue += operator;
  document.getElementById('display').value = displayValue;
}

function calculate() {
  let result;
  if (isValidExpression(displayValue)) {
    result = eval(displayValue);
    document.getElementById('display').value = result;
    displayValue = result.toString();
  } else {
    document.getElementById('display').value = 'Expressão inválida';
    displayValue = '';
  }
}

function isValidExpression(expression) {
  const operators = /[+\-*/]/;
  const numbers = /[0-9]/;
  
  if (!operators.test(expression) || !numbers.test(expression)) {
    return false;
  }
  
  
  if (!numbers.test(expression.charAt(expression.length - 1))) {
    return false;
  }
  
  return true;
}