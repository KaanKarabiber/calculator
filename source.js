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
    else{
        return 'not an operator';
    }
}
function getDisplay(){
    return document.querySelector('.display');
}
/* for keyboard support. I will comeback to this later
document.addEventListener('keydown', (event) => {
    const allowedKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '-', '*', '/', '+', '.', 'Backspace', 'Enter'];
    if (allowedKeys.includes(event.key)) {
      event.preventDefault();
      let display = getDisplay();
      display.textContent += event.key;
    }
}); */
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
        
        if(buttonText === '.' && dotLimit >= 1){
            display.textContent += button.textContent;
            dotLimit = 0;
        }
        else if(buttonText !== '.'){
            display.textContent += button.textContent;
        }
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
        dotLimit = 1;
    });
});
const clearButton = document.querySelector('.clear');
clearButton.addEventListener('click', ()=>{
    let display = getDisplay()
    display.textContent = '';
    firstNumber = 0;
    secondNumber = 0;
    operator = '';
    dotLimit = 1;
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
        dotLimit = 0;
    }
    else{
        secondNumber = 0;
        operator = '';
        display.textContent = total;
    }
});
const backSpaceButton = document.querySelector('.backspace');
backSpaceButton.addEventListener('click',() =>{
    let display = getDisplay();
    if(display.textContent.length > 0){
        if (display.textContent.charAt(display.textContent.length - 1) === '.'){
            dotLimit = 1;
        }
        subString = display.textContent.substring(0, display.textContent.length - 1);
        display.textContent = subString;
    }
});
let firstNumber = 0;
let secondNumber = 0;
let operator = '';
let dotLimit = 1;