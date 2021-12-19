
function add(x,y){
    return x + y;
}


function subtract(x,y){
    return x - y;
}


function multiply(x,y){
    return x * y;
}


function divide(x,y){
    return x / y;
}

function operate(x, operator, y){

}

const display = document.querySelector('.calculator-display');

const numbers = document.querySelectorAll('button.num');
const operators = document.querySelectorAll('button.op');

document.querySelector('.clear').addEventListener('click', 
    () => display.textContent = '')

numbers.forEach((button) => {
    button.addEventListener('click', () => {
        display.textContent += button.textContent;
    });
});

operators.forEach(button => {
    button.addEventListener('click', () => {
        let x = +display.textContent;
        let op = button.textContent;
    });
});
