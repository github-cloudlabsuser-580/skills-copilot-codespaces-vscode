const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calculate(num1, operator, num2) {
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            if (num2 !== 0) {
                return num1 / num2;
            } else {
                console.log("Error! Division by zero.");
                return null;
            }
        default:
            console.log("Invalid operator!");
            return null;
    }
}

rl.question('Enter the first number: ', (answer1) => {
    const num1 = parseFloat(answer1);
    rl.question('Enter an operator (+, -, *, /): ', (operator) => {
        rl.question('Enter the second number: ', (answer2) => {
            const num2 = parseFloat(answer2);
            const result = calculate(num1, operator, num2);
            if (result !== null) {
                console.log(`The result is: ${result}`);
            }
            rl.close();
        });
    });
});