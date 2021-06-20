/* eslint-disable class-methods-use-this */
// testSequencer.js
const Sequencer = require('@jest/test-sequencer').default;
// import type { Test } from '@jest/test-sequencer/node_modules/jest-runner/build/types';

class CustomSequencer extends Sequencer {
    sort(tests) {
    // Test structure information
    // https://github.com/facebook/jest/blob/6b8b1404a1d9254e7d5d90a8934087a9c9899dab/packages/jest-runner/src/types.ts#L17-L21
        const copyTests = Array.from(tests);
        return copyTests.sort((testA, testB) => {
            if (testA.path && /before.-?\d+.e2e-spec/.test(testA.path)) {
                if (testB.path && /before.-?\d+.e2e-spec/.test(testB.path)) {
                    return Number(testA.path.match(/(?!before.)-?\d+/)[0]) - Number(testB.path.match(/(?!before.)-?\d+/)[0]);
                }
                return -1;
            }
            if (testB.path && /before\d+.e2e-spec/.test(testB.path)) {
                return 1;
            }
            if (testA.path && /after.-?\d+.e2e-spec/.test(testA.path)) {
                if (testB.path && /after.-?\d+.e2e-spec/.test(testB.path)) {
                    return -Number(testA.path.match(/(?!after.)-?\d+/)[0]) + Number(testB.path.match(/(?!after.)-?\d+/)[0]);
                }
                return 1;
            }
            if (testB.path && /after.\d+.e2e-spec/.test(testB.path)) {
                return -1;
            }

            return 0;
        });
    }
}

module.exports = CustomSequencer;
