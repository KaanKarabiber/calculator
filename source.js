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
        if (display.textContent.length !== 1){
            length = display.textContent.length
            operator = display.textContent.slice(length -1 , length);
            firstNumber = display.textContent.slice(0, length - 1);
            console.log(operator)
            console.log(firstNumber)
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
});
const equalSignButton = document.querySelector('#equal-sign');
equalSignButton.addEventListener('click', () =>{
    display = getDisplay()
    secondNumber = display.textContent.split(/[-/*+]/).pop();
    console.log(secondNumber);
    const total = operate(parseFloat(firstNumber), parseFloat(secondNumber), operator);
    const totalAsString = String(total);
    if (totalAsString.includes('.')){
        let roundedTotal = total.toFixed(2);
        display.textContent = roundedTotal;
    }
    else{
        display.textContent = total;
    }
});
let firstNumber = 0;
let secondNumber = 0;
let operator = '';
