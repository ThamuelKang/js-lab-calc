//initializing empty array
const calculationHistory = []


//A global function: Creates an object and pushes it into the calcuationHistoryArray
function createObject(operation, operand, output) {
    const newObject = {
        operation: operation,
        operand: operand,
        output: output
    }
    calculationHistory.push(newObject)
}

// if (typeof output === 'number' && !isNaN(output)) {
//     console.log(output)
// } else {
//     console.log("invalid input!")
// }

function isANumber(value) {
    return (typeof value === 'number' && !isNaN(true))
}

function add(num1, num2) {
    const output = num1 + num2
    console.log(output)
}

function subtract(num1, num2) {
    const output = num1 - num2
    console.log(output)
}

function multiply(num1, num2) {
    const output = num1 * num2
    console.log(output)
}

function divide(num, den) {
    const output = num / den
    createObject('division', [num, den], output)
}

// add(10, 2)
// subtract(10, 2)
// multiply(10, 2)
divide(10, 2)

console.log(calculationHistory)