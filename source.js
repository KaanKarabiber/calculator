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
    button.addEventListener('click', (event) =>{
        let display = getDisplay();
        let displayLength = display.textContent.length;
        let lastChar = display.textContent.charAt(displayLength -1);
        const buttonText = event.target.textContent;
        if (lastChar === '+' || lastChar === '-' || lastChar === '*' || lastChar === '/'){
            if(['+', '-', '/', '*'].includes(buttonText)){
                let result = display.textContent.substring(0, displayLength - 1);
                display.textContent = result;
            }
        }
        display.textContent += button.textContent;
        
    }); 
});
const operatorButtons = document.querySelectorAll('.operators');
operatorButtons.forEach(button =>{
    button.addEventListener('click', () =>{
        let display = getDisplay();
        let displayLength = display.textContent.length;
        if (displayLength !== 1){
            operator = display.textContent.slice(displayLength - 1, displayLength);
            firstNumber = display.textContent.slice(0, displayLength - 1);
        }
    });
});
const clearButton = document.querySelector('.clear');
clearButton.addEventListener('click', ()=>{
    let display = getDisplay()
    display.textContent = '';
    firstNumber = 0;
    secondNumber = 0;
    operator = '';
});
const equalSignButton = document.querySelector('#equal-sign');
equalSignButton.addEventListener('click', () =>{
    let display = getDisplay()
    secondNumber = display.textContent.split(/[-/*+]/).pop();
    const total = operate(parseFloat(firstNumber), parseFloat(secondNumber), operator);
    const totalAsString = String(total);
    if (totalAsString.includes('.')){
        let roundedTotal = total.toFixed(2);
        display.textContent = roundedTotal;
        secondNumber = 0;
        operator = '';
    }
    else{
        secondNumber = 0;
        operator = '';
        display.textContent = total;
    }
});
let firstNumber = 0;
let secondNumber = 0;
let operator = '';
