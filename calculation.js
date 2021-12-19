
function add(x,y){
    return parseInt(x) + parseInt(y);
}


function subtract(x,y){
    return parseInt(x) - parseInt(y);
}


function multiply(x,y){
    return parseInt(x) * parseInt(y);
}


function divide(x,y){
    return parseInt(x) / parseInt(y);
}

function operate(operands, operators){

    const final = operands.reduce((first, next, idx) => {

        let operator = operators[idx-1]

        switch (operator) {
            case '+':
                console.log(first, operator, next)
                return add(first, next)
            case '-':
                console.log(first, operator, next)
                return subtract(first, next)
            case '*':
                console.log(first, operator, next)
                return multiply(first, next)
            case '/':
                console.log(first, operator, next)
                return divide(first, next)
        }       

    })
    console.log(final);
    return final 

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
            let operators = eq.replace(/\d+/g,'').split('');
            result = operate(operands, operators);
            display.textContent = result;
        } 
        else {
            display.textContent += button.textContent;
        }

        
    });
});
