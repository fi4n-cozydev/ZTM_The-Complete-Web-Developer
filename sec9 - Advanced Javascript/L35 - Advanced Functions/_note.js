// function first() {
//     var greet = 'Hi';
//     function second() {
//         alert(greet);
//     }
//     return second;
// }
// var newFunc = first();
// newFunc();

const first = () => {
    const greet = 'Hi';
    const second = () => {
        alert(greet);
    }
    return second;
}
const newFunc = first();
newFunc();  // alert 'Hi'

//! Closures - child alway access parent :: parent can't access there child
//?  a func ran. the func executed. it's never going to execute again
//?  BUT it's going to remember that there are references to those variable
//?  so the child scope always has access to the parent scope.

// -----------------------------------------------------------------------------
//! Currying - change the way func work to accept only 1 parameter at a time

const multiply = (a, b) => a * b;
const curriedMultiply = (a) => (b) => a * b;    // (3) => (b) => 3 * b
curriedMultiply(3);     // (b) => a * b
curriedMultiply(3)(4);  // 12

const multiplyBy5 = curriedMultiply(5);
multiplyBy5(5);     // 25
multiplyBy5(10);    // 50

// -----------------------------------------------------------------------------
//! Compose
//? put 2 func together to form a 3rd func
//? where output of 1st func is the input of the other

const compose = (f, g) => (a) => f(g(a));   // (sum, sum) => (5) = sum(sum(5))
const sum = (num) => num + 1;

compose(sum, sum)(5);   // 7

// -----------------------------------------------------------------------------
//! Avoiding Side Effects, functional purity

// example : func had changed the GLOBAL variable
var a = 1;
function b() {
    a = 2;      // the original variable had an effected BY func B
}


