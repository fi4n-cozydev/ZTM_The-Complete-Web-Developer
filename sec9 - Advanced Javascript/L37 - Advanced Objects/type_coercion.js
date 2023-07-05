// -------------------------------------------------------------
// https://dorey.github.io/JavaScript-Equality-Table/
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness
// https://262.ecma-international.org/5.1/#sec-11.9.3
// -------------------------------------------------------------

1 == '1';    // true
1 === '1';   // false

// 1 meaning -> true
// 0 -> false
if(1) { console.log(5) }    

Object.is(-0,+0);    // false

NaN === NaN;        // false
Object.is(NaN,NaN); // true