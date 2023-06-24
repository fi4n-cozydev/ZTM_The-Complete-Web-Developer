//! ternary Operation
// condition ? if true do something : if false do something ;

function isUserValid(bool) {
    return bool;
}

var answer = isUserValid(true) ? "Login Success" : "Access Denied" ;
console.log(answer);
// Login Success

var automatedAnswer = 
    "Your account # is " + (isUserValid(false) ? "1234" : "not available");
console.log(automatedAnswer);
// Your account # is not available

function condition() {
    if(isUserValid(true)) {
        return "Login Success";
    } else {
        return "Access Denied";
    }
}
var answer2 = condition();
console.log(answer2);
// Login Success