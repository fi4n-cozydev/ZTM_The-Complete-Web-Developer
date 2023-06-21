//! Data types:
//?     #Primitive
//         Number      0, 1, 2, ...
//         String      "some text" + "John" + 'is\'t'
//         Boolean     true or false --> ex. (5 > 10 -> false) or (3 === 3 -> true) or (3 !== 3 -> false)
//         Undefined
//         Null
//         Symbol (new in ECMAScript 6)
//         BigInt

//?     #Non-primitive 
//         Object (Array is not a special data types in JavaScript it belongs to the object data types)


//! comparisons:
//         !== (not equal to)
//         === (equal to)
//         >= (greater than or equal to)
//         <= (less than or equal to)
//         > (less than)
//         < (greater than)

//! ----------------------------------------------------------------
// Guess what answers you would get if you ran this in the
// Javascript Console in Google Chrome. Once you have an answer  to the questions then 
// check them by copying them and running it in the console yourself line by line 


//Evaluate the below:
5 + "34"            // 534
5 - "4"             // 1
10 % 5              // 0
5 % 10              // 5
"Java" + "Script"   // JavaScript
" " + " "           // "  "
" " + 0             // " 0"
true + true         // 2
true + false        // 1
false + true        // 1
false - true        // -1
false - false       // 0
3 - 4               // -1
"Bob" - "bill"      // NAN

//Evaluate the below comparisons:
5 >= 1              // true
0 === 1             // false
4 <= 1              // false
1 != 1              // false
"A" > "B"           // true
"B" < "C"           // false
"a" > "A"           // true
"b" < "A"           // false
true === false      // false
true != true        // false

// Make the string: "Hi There! It's "sunny" out" by using the + sign:
"Hi There!" + "It\'s \"sunny\" out"