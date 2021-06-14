const { bold } = require('chalk');
const chalk = require('chalk');
const moment = require('moment');
const CFonts = require('cfonts');
const boxen = require('boxen');


const { createLogger, format, transports } = require('winston');
const winston = require('winston');
const { combine, timestamp, label, printf } = format;

class Logger {
    constructor(label) {
        this.label = label;
    }

    info(message) {
        if (this.infoLogger) {
            this.infoLogger.info(message);
        } else {
            this.infoLogger = createLogger({
                format: combine(
                    label({ label: this.label }),
                    timestamp(),
                    printf(({ message, label, timestamp }) => {
                        return `${moment(timestamp).format('HH:mm:ss.SSS')} ${chalk.bgHex('#5cab00').hex('#ffffff').bold('  ' + label + '  ')} ${chalk.bgWhite.black(' ' + message + ' ')}`;
                    })),
                transports: [new transports.Console()]
            });
            this.infoLogger.info(message);
        }
    }

    debug(message) {
        if (this.debugLogger) {
            this.debugLogger.debug(message);
        } else {
            this.debugLogger = createLogger({
                format: combine(
                    label({ label: this.label }),
                    timestamp(),

                    printf(({ level, message, label, timestamp }) => {
                        return `${moment(timestamp).format('HH:mm:ss.SSS')} ${chalk.bgWhite.black.bold('  ' + label + '  ')} ${chalk.bgWhite.black(' ' + message + ' ')}`;
                    })),
                transports: [new transports.Console({ level: 'debug' })]
            });
            this.debugLogger.debug(message);
        }
    }

    warn(message) {
        if (this.warnLogger) {
            this.warnLogger.warn(message);
        } else {
            this.warnLogger = createLogger({
                format: combine(
                    label({ label: this.label }),
                    timestamp(),
                    printf(({ level, message, label, timestamp }) => {
                        return `${moment(timestamp).format('HH:mm:ss.SSS')} ${chalk.bgHex('#cfa200').hex('#ffffff').bold('  ' + label + '  ')} ${chalk.bgWhite.black(' ' + message + ' ')}`;
                    })),
                transports: [new transports.Console()]
            });
            this.warnLogger.warn(message);
        }
    }

    error(message) {
        if (this.errorLogger) {
            this.errorLogger.error(message);
        } else {
            this.errorLogger = createLogger({
                format: combine(
                    label({ label: this.label }),
                    timestamp(),
                    printf(({ level, message, label, timestamp }) => {
                        return `${moment(timestamp).format('HH:mm:ss.SSS')} ${chalk.bgHex('#cf0000').hex('#ffffff').bold('  ' + label + '  ')} ${chalk.bgWhite.black(' ' + message + ' ')}`;
                    })),
                transports: [new transports.Console()]
            });
            this.errorLogger.error(message);
        }
    }

    skipLines(number) {
        console.log('\n'.repeat(number));
    }
    /**
     * 
     * @param {string} message 
     * @param {{
     * font: 'console' | 'block' | 'simpleBlock' | 'simple' | '3d' | 'simple3d' | 'chrome' | 'huge' | 'shade' | 'slick' | 'grid' | 'pallet' | 'tiny',
     * align: 'left'| 'center'| 'right'| 'top'| 'bottom',
     * colors: ['system'| 'black'| 'red'| 'green'| 'yellow'| 'blue'| 'magenta'| 'cyan'| 'white'| 'gray'| 'redBright'| 'greenBright'| 'yellowBright'| 'blueBright'| 'magentaBright'| 'cyanBright'| 'whiteBright'| '#ff8800'],
     * background:  'transparent'| 'black'| 'red'| 'green'| 'yellow'| 'blue'| 'magenta'| 'cyan'| 'white'| 'blackBright'| 'redBright'| 'greenBright'| 'yellowBright'| 'blueBright'| 'magentaBright'| 'cyanBright'| 'whiteBright',
     * letterSpacing: number,
     * lineHeight: number,
     * space: boolean,
     * maxLength: number,
     * gradient: boolean,
     * independentGradient: boolean,
     * transitionGradient: boolean,
     * env: 'node'
     * }} options 
     */
    title(message, options) {
        CFonts.say(message, {
            font: 'tiny',
            env: 'node',
            colors: ['black'],
            background: 'white',
            align: 'center',
            ...options
        });
    }
}




module.exports = Logger;
