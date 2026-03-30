let currentInput = "0";
let operator = null;
let previousInput = null;
let shouldResetDisplay = false;

const display = document.getElementById("display");

function updateDisplay() {
  display.textContent = currentInput;
}

function appendNumber(number) {
  if (currentInput === "0" || shouldResetDisplay) {
    currentInput = number;
    shouldResetDisplay = false;
  } else {
    currentInput += number;
  }
  updateDisplay();
}

function appendDecimal() {
  if (!currentInput.includes(".")) {
    currentInput += ".";
    updateDisplay();
  }
}

function clearDisplay() {
  currentInput = "0";
  previousInput = null;
  operator = null;
  updateDisplay();
}

function toggleSign() {
  currentInput = (parseFloat(currentInput) * -1).toString();
  updateDisplay();
}

function percent() {
  currentInput = (parseFloat(currentInput) / 100).toString();
  updateDisplay();
}

function setOperator(op) {
  if (operator !== null) calculate();
  previousInput = currentInput;
  operator = op;
  shouldResetDisplay = true;
}

function calculate() {
  if (operator === null || shouldResetDisplay) return;

  const prev = parseFloat(previousInput);
  const current = parseFloat(currentInput);
  let result;

  switch (operator) {
    case "+":
      result = prev + current;
      break;
    case "-":
      result = prev - current;
      break;
    case "*":
      result = prev * current;
      break;
    case "/":
      result = prev / current;
      break;
    default:
      return;
  }

  currentInput = result.toString();
  operator = null;
  previousInput = null;
  shouldResetDisplay = true;
  updateDisplay();
}
