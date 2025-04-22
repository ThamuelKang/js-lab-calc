const calculationHistory = []


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

    const newObject = {
        operations: 'division',
        operands: [num, den],
        output: output
    }
    calculationHistory.push(newObject)
}

// add(10, 2)
// subtract(10, 2)
// multiply(10, 2)
divide(10, 2)

console.log(calculationHistory)