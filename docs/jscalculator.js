let firstNumber = '';
let secondNumber = '';
let operator = '';
let result = '';
let expression = '';

function addNumber(num) {
    if (operator === '') {
        firstNumber += num;
        expression = firstNumber;
        displayNumber(expression);
    } else {
        secondNumber += num;
        expression = firstNumber + ' ' + operator + ' ' + secondNumber;
        displayNumber(expression);
    }
}

function addDecimal() {
    if (operator === '') {
        if (!firstNumber.includes('.')) {
            firstNumber = firstNumber === '' ? '0.' : firstNumber + '.';
            expression = firstNumber;
        }
    } else {
        if (!secondNumber.includes('.')) {
            secondNumber = secondNumber === '' ? '0.' : secondNumber + '.';
            expression = firstNumber + ' ' + operator + ' ' + secondNumber;
        }
    }
    displayNumber(expression);
}

function setOperator(op) {
    if (firstNumber !== '') {
        if (secondNumber !== '') {
            calculate(false);
            operator = op;
            expression = firstNumber + ' ' + operator;
        } else {
            operator = op;
            expression = firstNumber + ' ' + operator;
        }
        displayNumber(expression);
    }
}

function calculate(showEquals = true) {
    if (firstNumber !== '' && secondNumber !== '' && operator !== '') {
        let num1 = parseFloat(firstNumber);
        let num2 = parseFloat(secondNumber);
        
        switch(operator) {
            case '+':
                result = add(num1, num2);
                break;
            case '-':
                result = subtract(num1, num2);
                break;
            case '*':
                result = multiply(num1, num2);
                break;
            case '/':
                result = divide(num1, num2);
                break;
        }
        
        if (showEquals) {
            expression = expression + ' = ' + result;
        }
        displayNumber(expression);
        firstNumber = result.toString();
        secondNumber = '';
        operator = '';
    }
}

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if(b === 0) {
        return "Error";
    }
    return a / b;
}

function convertToNumber(str) {
    let num = 0;
    let isNegative = false;
    
    for(let i = 0; i < str.length; i++) {
        if(str[i] === '-' && i === 0) {
            isNegative = true;
            continue;
        }
        num = num * 10 + (str[i] - '0');
    }
    
    return isNegative ? -num : num;
}

function displayNumber(value) {
    let display = document.getElementById('display');
    if (display) {
        display.value = value || '0';
    }
}

function clearDisplay() {
    firstNumber = '';
    secondNumber = '';
    operator = '';
    result = '';
    expression = '';
    displayNumber('0');
}

window.onload = function() {
    displayNumber('0');
};
