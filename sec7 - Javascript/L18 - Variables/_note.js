//! variables:
//         var
//         let (new in ECMAScript 6) : Used to declare variables that can be changed using code later on
//         const (new in ECMAScript 6) : Used to declare constants that remain constant throughout the execution of the program, mostly used for functions and object

//! ---------------------------------------------------------------
// add variable "firstName" and "lastName" // so that they equal your name
var firstName = "snowDotted";
var lastName = "Tk";


// create a variable that holds the answer // of "firstName" + " " + "lastName"
var fullName = firstName + " " +  lastName;

// Evaluate this question. What is a + b?
var a = 34;
var b = 21;
a = 2;
a + b // what is the answer here?   ->  a + b = 23

// What is c equal to?
var c;  // undefined

prompt("what is your name?")
// 'Joe'

var num1 = prompt("enter 1'st number");
var num2 = prompt("enter 2'ns number");
//num1 = '1'
//num2 = '2'

var sum = Number(num1) + Number(num2);
//sum  >  3

alert("num1 + num2 = " + sum);
// 3


var a = true;
// a = true

a = "Hello";
// a = Hello

//! ---------------------------------------------------------------
// Make a Calculator! using prompt(), and variables, make a program that does the following:
// 1. Prompts the user for first number.
// 2. Stores that first number
// 3. Prompts the user for the second number.
// 4. stores that number and responds with the SUM by using an alert.  


// BONUS: Make a program that can subtract, multiply, and also divide!

var n1 = prompt("enter n1");
// 2
var n2 = prompt("enter n2");
// 3
alert(Number(n1) * Number(n2));
// 6