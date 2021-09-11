let decimalBtn = document.getElementById('calc-decimal');
let clearBtn = document.getElementById('calc-clear');
let backspaceBtn = document.getElementById('calc-backspace');
let displayValElement = document.getElementById('calc-display-val');

let calcNumBtns = document.getElementsByClassName('calc-btn-num');
let calcOperatorBtns = document.getElementsByClassName('calc-btn-operator');

let displayValue = '0'
let pendingValue;
let evalStringArray = [];

let updateDisplayValue = (event) => {
    let btnText = event.target.innerText;

    if (displayValue === '0') {
        displayValue = '';
    }

    displayValue += btnText;
    displayValElement.innerText = displayValue;
}

let performOperationValue = (event) => {
    let operator = event.target.innerText;

    switch (operator) {
        case '+':
            pendingValue = displayValue;
            displayValue = '0'
            displayValElement.innerText = displayValue
            evalStringArray.push(pendingValue)
            evalStringArray.push('+') 
            console.log(evalStringArray);           
            break;
    
        default:
            break;
    }
}


for (let i = 0; i < calcNumBtns.length; i++) {
    calcNumBtns[i].addEventListener('click', updateDisplayValue, false)    
}

for (let i = 0; i < calcOperatorBtns.length; i++) {
    calcOperatorBtns[i].addEventListener('click', performOperationValue, false)
}

clearBtn.onclick = () => {
    displayValue = '0'
    pendingValue = undefined;
    evalStringArray = [];
    displayValElement.innerText = displayValue;
}

backspaceBtn.onclick = () => {
    let lengthOfDisplayValue = displayValue.length;
    displayValue = displayValue.slice(0, lengthOfDisplayValue -1)

    if(displayValue === ''){
        displayValue = '0'
    }

    displayValElement.innerText = displayValue
}

decimalBtn.onclick = () => {
    if (!displayValue.includes('.')) {
        displayValue += '.'
    }
    
    displayValElement.innerText = displayValue;
}