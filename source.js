function add(a, b){
    return a + b;
}
function subtract(a, b){
    return a - b;
}
function multiply(a, b){
    return a * b;
}
function divide(a, b){
    return a / b;
}
function operate(a, b, operator){
    if(operator === '+'){
        return add(a, b);
    }
    if(operator === '-'){
        return subtract(a, b); 
    }
    if(operator === '*'){
        return multiply(a, b);
    }
    if(operator === '/'){
        return divide(a, b);
    }
}
function getDisplay(){
    return document.querySelector('.display');
}
const buttons = document.querySelectorAll('.numbers, .operators');
buttons.forEach(button => {
    button.addEventListener('click', () =>{
        display = getDisplay()
        display.textContent += button.textContent;
    }); 
});
const operatorButtons = document.querySelectorAll('.operators');
operatorButtons.forEach(button =>{
    button.addEventListener('click', () =>{
        display = getDisplay();
        if(display.textContent[0] === '-'){
            negativeNumber = true;
        }
    });
});
const clearButton = document.querySelector('.clear');
clearButton.addEventListener('click', ()=>{
    display = getDisplay()
    display.textContent = '';
    firstNumber = 0;
    secondNumber = 0;
    operator = '';
    negativeNumber = false;
});
const equalSignButton = document.querySelector('#equal-sign');
equalSignButton.addEventListener('click', () =>{
    display = getDisplay()
    const equation = display.textContent;
    const splitEquation = equation.split(operators);
    console.log(splitEquation);
    firstNumber = splitEquation[0];
    operator = splitEquation[1];
    secondNumber = splitEquation[2];
    if (negativeNumber){
        firstNumber = `-${splitEquation[2]}`;
        operator = splitEquation[3];
        secondNumber = splitEquation[4];
    }
    const total = operate(parseInt(firstNumber), parseInt(secondNumber), operator);
    let roundedTotal = total.toFixed(2)
    display.textContent = roundedTotal;
});
let firstNumber = 0;
let secondNumber = 0;
let operator = '';
const operators = /([+\-*/])/g;
let negativeNumber = false;