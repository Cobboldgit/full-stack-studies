class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement){
        this.previousOperandTextElement = previousOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement
        this.clear()
    }

    clear() {
        this.currentOperand = ''
        this.previousOperand = ''
        this.operation = undefined
    }

    delect() {

    }

    appendNumber(number) {
        this.currentOperand = number
    }

    chooseOperation(operation) {

    }

    compute() {

    }

    updateDisplay() {
        this.currentOperandTextElement.innerText = this.currentOperand
    }
}

const numberButtons = document.querySelectorAll('data-number');
const operationButtons = document.querySelectorAll('data-operation');
const equalsButtons = document.querySelectorAll('data-equals');
const delectButtons = document.querySelectorAll('data-delect');
const allClearButtons = document.querySelectorAll('data-all-clear');
const previousOperandTextElement = document.querySelectorAll('data-previous-operand');
const currentOperandTextElement = document.querySelectorAll('data-current-operand');

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})          