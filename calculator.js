let currentInput = "";
let previousInput = "";
let operation = null;
let resetScreen = false;

function updateDisplay() {
    document.getElementById("display").value = currentInput;
}

function appendNumber(number) {
    if (resetScreen) {
        currentInput = number;
        resetScreen = false;
    } else {
        currentInput += number;
    }
    updateDisplay();
}

function appendDecimal() {
    if (resetScreen) {
        currentInput = "0.";
        resetScreen = false;
    } else if (!currentInput.includes(".")) {
        currentInput += ".";
    }
    updateDisplay();
}

function appendOperator(op) {
    if (currentInput === "") return;

    if (previousInput !== "") {
        calculate();
    }

    operation = op;
    previousInput = currentInput;
    resetScreen = true;
}

function calculate() {
    if (previousInput === "" || resetScreen) return;

    let result;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);

    switch (operation) {
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
            if (current === 0) {
                alert("Cannot divide by zero");
                currentInput = "Error";
                resetScreen = true;
            } else {
                result = prev / current;
                result = Math.round(result * 100) / 100;
                currentInput = result.toString();

            }
            break;
        case "^":
            result = Math.pow(prev, current);
            break;
        default:
            return;
        }

        // Round 2 decimal places
        result = Math.round(result * 100) / 100;

        currentInput = result.toString();
        operation = null;
        previousInput = "";
        resetScreen = true;
        updateDisplay();
}

function calculateFactorial() {
    if (currentInput === "") return;

    let num = parseInt(currentInput);
    if (num < 0) {
        currentInput = "Error";
    } else {
        let result = 1;
        for (let i = 2; i <= num; i++) {
            result *= i;
        }
        currentInput = result.toString();
    }

    resetScreen = true;
    updateDisplay();
}

function clearAll() {
    currentInput = "";
    previousInput = "";
    operation = null;
    resetScreen = false;
    updateDisplay();
}

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply( a, b) {
    return a / b;
}

function power(a, b) {
    return a ** b;
}

function factorial(num) {
    if (num < 0) return NaN;
    if (num === 0 || num === 1) return 1;
    return num * factorial(num - 1);
}
