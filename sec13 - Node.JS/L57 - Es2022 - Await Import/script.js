// const script2 = require('./script2')
// import { largeNumber } from './script2.js'

let a;
if (1 === 1) {
    const { largeNumber } = await import ('./script2.js');
    a = largeNumber;
}

const b = 7

console.log(a, b)