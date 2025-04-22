//Initializing empty array
const calculationHistory = []

//A global function: Checking if an array is empty
function checkArray(arr) {
    if (arr.length === 0) {
        console.log('You have not calculated anything!')
    } else {
        console.log(arr)
    }
}

//A global function: Creates an object and pushes it into the calcuationHistoryArray
function createObject(operation, operand, output) {
    const newObject = {
        operation,
        operand,
        output
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
    createObject('addition', [num1, num2], output)
}

function subtract(num1, num2) {
    const output = num1 - num2
    createObject('subtraction', [num1, num2], output)
}

function multiply(num1, num2) {
    const output = num1 * num2
    createObject('multiplification', [num1, num2], output)
}

function divide(num, den) {
    const output = num / den
    createObject('division', [num, den], output)
}

// add(10, 2)
// subtract(10, 2)
// multiply(10, 2)
// divide(10, 2)


checkArray(calculationHistory)
