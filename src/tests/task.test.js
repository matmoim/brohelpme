const Logger = require('./test.logger');
const { drawDoubleLine } = require('../task');
const chalk = require('chalk');



const logger = new Logger('drawDoubleLine');
const actual = drawDoubleLine(2);
const expected = '####';

if (actual !== expected) {
    if (typeof actual !== 'string') {
        logger.warn('Your result is not a string!');
        logger.debug(`Has your function a ${chalk.whiteBright.bgBlack.bold(' return ')} ?`);
    }

    logger.skipLines(2);
    logger.error(`Actual:`);
    logger.title(String(actual), {align: 'left', background: 'redBright'});
    logger.info(`Expected:`);
    logger.title(expected, { align: 'left', background: 'greenBright' });
} else {
    logger.title('Exelent!', { font: 'block', gradient: ['green', 'blue']});
    logger.title(actual, { font: 'block', gradient: ['green', 'blue']});
}






