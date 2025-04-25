//Initializing empty array
const calculationHistory = []

//A global function: Checking if an array is empty or prints if not empty
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

//A global function: Checks if its NOT a number or NaN
function checkNumber(output) {
    if (typeof output !== 'number' || isNaN(output)) {
        return output = 'Invalid results'
    } else {
        return output
    }
}


function add(num1, num2) {
    let output = num1 + num2
    output = checkNumber(output)
    createObject('addition', [num1, num2], output)
}

function subtract(num1, num2) {
    let output = num1 - num2
    output = checkNumber(output)
    createObject('subtraction', [num1, num2], output)
}

function multiply(num1, num2) {
    let output = num1 * num2
    output = checkNumber(output)
    createObject('multiplification', [num1, num2], output)
}

function divide(num, den) {
    let output = num / den
    output = checkNumber(output)
    createObject('division', [num, den], output)
}


//testing functions
// add(10, 2)
// subtract(10, 2)
// multiply(10, 2)
// divide(10, 2)
// divide(2, 'a')
// divide(0, 1)
// multiply(0,1)
// multiply(0,0)


checkArray(calculationHistory)
