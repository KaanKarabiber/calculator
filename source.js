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
const buttons = document.querySelectorAll('.numbers, .operators');
buttons.forEach(button => {
    button.addEventListener('click', () =>{
        const display = document.querySelector('.display');
        display.textContent += button.textContent;
    }); 
});
const clearButton = document.querySelector('.clear');
clearButton.addEventListener('click', ()=>{
    const display = document.querySelector('.display');
    display.textContent = '';
});
const equalSignButton = document.querySelector('#equal-sign');
equalSignButton.addEventListener('click', () =>{
    const display = document.querySelector('.display');
    const equation = display.textContent;
    firstNumber = equation.charAt(0);
    operator = equation.charAt(1);
    secondNumber = equation.charAt(2);
    const total = operate(parseInt(firstNumber), parseInt(secondNumber), operator);
    display.textContent = total;
});
let firstNumber = 0;
let secondNumber = 0;
let operator = '';