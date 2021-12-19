
function add(x,y){
    return parseFloat(x) + parseFloat(y);
}


function subtract(x,y){
    return parseFloat(x) - parseFloat(y);
}


function multiply(x,y){
    return parseFloat(x) * parseFloat(y);
}


function divide(x,y){
    return parseFloat(x) / parseFloat(y);
}

function operate(operands, operators){

    const final = operands.reduce((first, next, idx) => {

        let operator = operators[idx-1]

        switch (operator) {
            case '+': 
                return add(first, next)
            case '-': 
                return subtract(first, next)
            case '*': 
                return multiply(first, next)
            case '/': 
                return divide(first, next)
        }       

    })
    return Math.round(final * 10000) / 10000 

}

const display = document.querySelector('.calculator-display');
const buttons = document.querySelectorAll('button.op, button.num');
 
let x = 0
    ,y = 0
    ,op;

document.querySelector('.clear').addEventListener('click', 
    () => {
        display.textContent = '';
        x = 0;
        y = 0;
})

let result = 0
buttons.forEach(button => {
    button.addEventListener('click', () => { 
        if (button.textContent == '=') {
            let eq =  document.querySelector('.calculator-display').textContent;
            let operands = document.querySelector('.calculator-display').textContent.split(/\+|\-|\*|\//g);
            let operators = eq.replace(/\d+|\./g,'').split('');
            result = operate(operands, operators);
            display.textContent = result;
        } 
        else {
            display.textContent += button.textContent;
        }

        
    });
});
