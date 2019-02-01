function calculator(number1, operator, number2) {
    number1 = Number(number1);
    number2 = Number(number2);

    if (operator === "+") {
        console.log(`${(number1 + number2).toFixed(2)}`)
    } else if (operator === "*") {
        console.log(`${(number1 * number2).toFixed(2)}`)
    } else if (operator === "-") {
        console.log(`${(number1 - number2).toFixed(2)}`)
    } else if (operator === "/") {
        if (number2 === 0) {
            console.log("Cannot divide by 0");
        } else {
            console.log(`${(number1 / number2).toFixed(2)}`)
        }
    }
}