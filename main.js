const previousOperation = document.querySelector('[data-previous-opeation]')
const currentOperation = document.querySelector('[data-current-operation]')
const tempOperation = document.querySelector('[data-temp-operation]')
const equalsBtn = document.querySelector('[data-equals]')
const numberBtn = document.querySelectorAll('[data-number]')
const operatorBtn = document.querySelectorAll('[data-operator]')
const allClearBtn = document.querySelector('[data-all-clear]')
const deleteBtn = document.querySelector('[data-delete]')

let currentDisplayedOperation = '';
let previousDisplayedOperation = '';
let result = null;
let lastOperation = '';
let haveDot = false;

numberBtn.forEach(number => {
  number.addEventListener('click', (e) => {
    if (e.target.innerText === '.' && !haveDot) {
      haveDot = true
    } else if (e.target.innerText === '.' && haveDot) {
      return;
    }
    currentDisplayedOperation += e.target.innerText;
    currentOperation.innerText = currentDisplayedOperation;
  })
})


operatorBtn.forEach(operator => {
  operator.addEventListener('click', (e) => {
    if (!previousDisplayedOperation) return;
    haveDot = false;
    const operationName = e.target.innerText;
    if (currentDisplayedOperation && previousDisplayedOperation && lastOperation) {
      mathOperation();
    } else {
      result = parseFloat(previousDisplayedOperation);
    }
    console.log(result)
  })
})




function add(a, b) {
  return a + b;
};

function multiply(a, b) {
  return a * b;
};

function substract(a, b) {
  return a - b;
};

function divide(a, b) {
  return a / b;
};



