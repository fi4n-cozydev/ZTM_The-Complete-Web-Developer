// functions:
//      var a = function name() {}
//      function name() {}
//      return
//      () => (new in ECMAScript 6)

//* ----------------------------------------------------------------
alert("hi,John")
console.log("hello", "how r u?");
//* ----------------------------------------------------------------
function sayHello() {
    console.log("Hello!");
    console.log("John");
}
sayHello();
// Hello!
// John
//* ----------------------------------------------------------------
var sayBye = function() {
    console.log("bye!");
}
sayBye();
// bye!
//* ----------------------------------------------------------------
function sing(song) {
    console.log(song);
}
sing("album_1");
sing("album_2");
// album_1
// album_2
//* ----------------------------------------------------------------
function multiply(a, b) {    
    if(a > 10 || b > 10) {
        return "that's too hard";
    } else {
        return a * b;
    }
}
alert(multiply(5,10));  //*show in console
// 50
multiply(11,2);
// that's too hard      //*show with browser popup

var total = multiply(3,7);
alert(total);
// 21

//! ---------------------------------------------------------------
// Make a keyless car EVEN BETTER!
// We are improving our car from previous exercise now.
// Solutions to future exercises will be in the .js file (meaning Javascript file) from now on.

var age = prompt("What is your age?");

if (Number(age) < 18) {
	alert("Sorry, you are too yound to drive this car. Powering off");
} else if (Number(age) > 18) {
	alert("Powering On. Enjoy the ride!");
} else if (Number(age) === 18) {
	alert("Congratulations on your first year of driving. Enjoy the ride!");
}

//1. Make the above code have a function called checkDriverAge(). Whenever you call this function, you will get prompted for age. Use Function Declaration to create this function.
// Notice the benefit in having checkDriverAge() instead of copying and pasting the function everytime?

//2. Create another function that does the same thing, called checkDriverAge2() using Function Expression.

//BONUS: Instead of using the prompt. Now, only use console.log and make the checkDriverAge() function accept an argument of age, so that if you enter:
checkDriverAge(92);
// it returns "Powering On. Enjoy the ride!"

function checkDriverAge() {
	var age = prompt("What is your age?");
	if (Number(age) < 18) {
		alert("Sorry, you are too yound to drive this car. Powering off");
	} else if (Number(age) > 18) {
		alert("Powering On. Enjoy the ride!");
	} else if (Number(age) === 18) {
		alert("Congratulations on your first year of driving. Enjoy the ride!");
	}
}

var checkDriverAge2 = function() {
	var age = prompt("What is your age?");
	if (Number(age) < 18) {
		alert("Sorry, you are too yound to drive this car. Powering off");
	} else if (Number(age) > 18) {
		alert("Powering On. Enjoy the ride!");
	} else if (Number(age) === 18) {
		alert("Congratulations on your first year of driving. Enjoy the ride!");
	}
}

function checkDriverAge(age) {
	if (Number(age) < 18) {
		return "Sorry, you are too yound to drive this car. Powering off";
	} else if (Number(age) > 18) {
		return "Powering On. Enjoy the ride!";
	} else if (Number(age) === 18) {
		return "Congratulations on your first year of driving. Enjoy the ride!";
	}
}