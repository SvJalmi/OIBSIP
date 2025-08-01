const expressionDisplay = document.getElementById('expression');
const resultDisplay = document.getElementById('result');
const buttons = document.querySelectorAll('.btn');
const themeToggle = document.getElementById('theme-toggle');

let expression = '';
let lastAnswer = '0';
let parenthesesOpen = false;

function updateDisplay() {
  expressionDisplay.textContent = expression || '0';
  resultDisplay.textContent = '';
}

function safeEval(expr) {
  try {
    let sanitizedExpr = expr.replace(/×/g, '*').replace(/÷/g, '/');
    const func = new Function('return ' + sanitizedExpr);
    const val = func();
    if (val === undefined || val === null || isNaN(val)) {
      return 'Error';
    }
    return val;
  } catch {
    return 'Error';
  }
}

function calculate() {
  if (!expression) return;
  let exprToEval = expression;
  exprToEval = exprToEval.replace(/ans/gi, lastAnswer);
  exprToEval = exprToEval.replace(/×/g, '*').replace(/÷/g, '/').replace(/−/g, '-');
  const result = safeEval(exprToEval);
  if (result === 'Error') {
    resultDisplay.textContent = 'Error';
  } else {
    // Limit decimal places to 8 if result is a number with decimals
    let displayResult = result;
    if (typeof result === 'number' && !Number.isInteger(result)) {
      displayResult = parseFloat(result.toFixed(8));
    }
    resultDisplay.textContent = displayResult;
    lastAnswer = displayResult.toString();
    expression = displayResult.toString();
  }
}

function addToExpression(value) {
  // If adding 'ans', replace last 'ans' if already present to avoid duplicates
  if (value === 'ans') {
    if (expression.endsWith('ans')) {
      expression = expression.slice(0, -3) + 'ans';
    } else {
      expression += value;
    }
  } else {
    expression += value;
  }
  updateDisplay();
}

function toggleParentheses() {
  if (parenthesesOpen) {
    expression += ')';
    parenthesesOpen = false;
  } else {
    expression += '(';
    parenthesesOpen = true;
  }
  updateDisplay();
}

function deleteLast() {
  if (expression.length > 0) {
    const lastChar = expression.slice(-1);
    expression = expression.slice(0, -1);
    if (lastChar === '(') parenthesesOpen = false;
    if (lastChar === ')') parenthesesOpen = true;
  }
  updateDisplay();
}

function clearAll() {
  expression = '';
  parenthesesOpen = false;
  updateDisplay();
  resultDisplay.textContent = '';
}

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const action = button.dataset.action;
    const value = button.dataset.value;
    if (action === 'clear') {
      clearAll();
    } else if (action === 'delete') {
      deleteLast();
    } else if (action === 'ans') {
      // Prevent multiple consecutive 'ans' strings
      if (!expression.endsWith('ans')) {
        addToExpression('ans');
      }
    } else if (action === 'parentheses') {
      toggleParentheses();
    } else if (action === 'calculate') {
      calculate();
    } else if (value !== undefined) {
      addToExpression(value);
    }
  });
});

// Keyboard support
window.addEventListener('keydown', (e) => {
  const key = e.key;
  if ((key >= '0' && key <= '9') || key === '.') {
    addToExpression(key);
  } else if (key === '+' || key === '-' || key === '*' || key === '/' || key === '%') {
    addToExpression(key);
  } else if (key === 'Enter' || key === '=') {
    e.preventDefault();
    calculate();
  } else if (key === 'Backspace') {
    deleteLast();
  } else if (key === 'Escape') {
    clearAll();
  } else if (key === '(' || key === ')') {
    addToExpression(key);
  }
});

// Theme toggle
function setTheme(dark) {
  if (dark) {
    document.body.classList.add('dark');
    themeToggle.checked = true;
  } else {
    document.body.classList.remove('dark');
    themeToggle.checked = false;
  }
  localStorage.setItem('darkMode', dark ? 'true' : 'false');
}

themeToggle.addEventListener('change', () => {
  setTheme(themeToggle.checked);
});

// Load theme preference
const savedTheme = localStorage.getItem('darkMode');
if (savedTheme === 'true') {
  setTheme(true);
} else {
  setTheme(false);
}
