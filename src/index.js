import inquirer from 'inquirer';
async function calculator() {
    const questions = [
        {
            type: 'input',
            name: 'num1',
            message: 'Enter the first number:',
        },
        {
            type: 'input',
            name: 'num2',
            message: 'Enter the second number:',
        },
        {
            type: 'list',
            name: 'operation',
            message: 'Select an operation:',
            choices: ['Addition', 'Subtraction', 'Multiplication', 'Division'],
        },
    ];
    const { num1, num2, operation } = await inquirer.prompt(questions);
    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);
    let result;
    switch (operation) {
        case 'Addition':
            result = number1 + number2;
            break;
        case 'Subtraction':
            result = number1 - number2;
            break;
        case 'Multiplication':
            result = number1 * number2;
            break;
        case 'Division':
            result = number2 !== 0 ? number1 / number2 : NaN;
            break;
        default:
            result = NaN;
    }
    console.log(`Result: ${result}`);
}
calculator();
