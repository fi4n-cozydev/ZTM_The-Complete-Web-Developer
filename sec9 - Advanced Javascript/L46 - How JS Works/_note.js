const a = 1;
const b = 10;
const c = 100;

//! memory leak = variable exist but (never use)

//! call stack --> <first-in> <last-out>
console.log('1');   // run => show => erase
console.log('2');
console.log('3');

const one = () => {
    const two = () => {
        console.log('4');
    }
    two();  // 4
}

//! progressing...
// console.log('4');
// two()
// one()

//! recursion (function it's called it self.) --> infinite loop...
function A(){
    A()
}
A();

//! asynchronous
console.log('a');
setTimeout(() => {
    console.log('b');
}, 2000)                // wait for 2 second
// console.log('c');    // this run first before waiting time... good for API ot callback

//** progressing... */
/*
    CALL STACK 
    -> setTimeout(), 2000
    WEB APIs (DOM, AJAX, Timeout)
    -> 
    CALLBACK QUEUE
    -> 
    EVENT LOOP...
*/

element.addEventListener('click', () => {
    console.log('click!');
})

