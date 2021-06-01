const chalk = require('chalk');

const { builder } = require('./houseBuilder.js');
const userNumber = process.argv[2];
let taskNumber = process.argv[3];


const checkers = [
    (number) => {
        const expected = '#'.repeat(number);

        if (builder(number) === expected) {
            console.log(chalk.hex('#000000').bold.bgGreenBright(`\n Excelent!!! \n\n${expected}\n\n`));
        } else {
            console.log(chalk.hex('#000000').bold.bgRed(' Ooops... '));
            console.log('Your variant:\n');
            console.log(chalk.hex('#000000').bold.bgYellow(builder(number)));
            console.log('But expected:\n');
            console.log(chalk.hex('#000000').bold.green(expected));
        }
    },
    (number) => {
        const expected = '#\n'.repeat(number).split('').slice(0, -1).join('');

        if (builder(number) === expected) {
            console.log(chalk.hex('#000000').bold.bgGreenBright(`\n Excelent!!! \n\n${expected}\n\n`));
        } else {
            console.log(chalk.hex('#000000').bold.bgRed(' Ooops... '));
            console.log('Your variant:');
            console.log(chalk.hex('#000000').bold.bgYellow(builder(number)));
            console.log('But expected:');
            console.log(chalk.hex('#000000').bold.green(expected));
        }
    },
    (number) => {
        const expected = '#'.repeat(number).concat('\n').repeat(number).split('').slice(0, -1).join('');

        if (builder(number) === expected) {
            console.log(chalk.hex('#000000').bold.bgGreenBright(`\n Excelent!!! \n\n${expected}\n\n`));
        } else {
            console.log(chalk.hex('#000000').bold.bgRed(' Ooops... '));
            console.log('Your variant:');
            console.log(chalk.hex('#000000').bold.bgYellow(builder(number)));
            console.log('But expected:');
            console.log(chalk.hex('#000000').bold.green(expected));
        }
    },
    (number) => {

        let expected = '';
        for (let i = 0; i < number; ++i) { expected += '#'.repeat(i) + '\n'; }
        expected.split('').slice(0, -1).join('');


        if (builder(number) === expected) {
            console.log(chalk.hex('#000000').bold.bgGreenBright(`\n Excelent!!! \n\n${expected}\n\n`));
        } else {
            console.log(chalk.hex('#000000').bold.bgRed(' Ooops... '));
            console.log('Your variant:');
            console.log(chalk.hex('#000000').bold.bgYellow(builder(number)));
            console.log('But expected:');
            console.log(chalk.hex('#000000').bold.green(expected));
        }
    }
];

if (isNaN(userNumber) || isNaN(taskNumber)) {
    throw new Error(errorMessage(`\n YOUR INPUT VALUE (${userNumber}) IS NOT A NUMBER ! ! ! \n`));
}

if (taskNumber < 1 || taskNumber > checkers.length) {
    throw new Error(errorMessage(` THIS IS INCORRECT TASK NUMBER (${taskNumber} too big or too small for ${checkers.length}) `));
}


checkers[taskNumber - 1](userNumber);

function errorMessage(message) {
    return chalk.hex('#000000').bold.bgRedBright(`\n                                                             \n   Dear brother,                                                             \n  ${message}                          
                                                                         `);
}