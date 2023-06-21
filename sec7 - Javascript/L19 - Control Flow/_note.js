//! conditionals:
        //if
            if(condition) {
                //Code written here is executed if condition is true
            }

        //else
            if(condition1) {
                //Code written here is executed if condition1 is true
            } else {
                //Code written here is executed if condition is false
            }

        //else if
            if(condition) {
                //Code written here is executed if condition1 is true
            } else if(condition) {
                //Code written here is executed if condition2 is true
            }

        //ternary operator
            // condition ? (code that runs with condition is true) : (code that runs when condition is false);

        //switch
            switch(expression){
                case result1:
                    //code that runs if expression gives result1
                    break;
                case result2:
                    //code that runs if expression gives result2
                    break;
                default:
                    //code that runs if expression gives neither result1 nor result2
            }

//! logical operators:
        // && = Sees if both values are the same/true.
        // || = Sees if there is at least one of the same/ true value.
        // ! = Turns true into false, and false into true.

//! -----------------------------------------------------------------
// Make a keyless car!
// This car will only let you drive if you are over 18. Make it do the following:


//using prompt() and alert(), ask a user for their age.
// IF they say they are below 18, respond with:
// "Sorry, you are too young to drive this car. Powering off"

// IF they say they are 18, respond with:
// "Congratulations on your first year of driving. Enjoy the ride!"

// IF they say they are over 18, respond with:
// "Powering On. Enjoy the ride!" 

var age = Number(prompt("What is your age?"));

if (age < 18) {
	alert("Sorry, you are too yound to drive this car. Powering off");
} else if (age > 18) {
	alert("Powering On. Enjoy the ride!");
} else if (age === 18) {
	alert("Congratulations on your first year of driving. Enjoy the ride!");
}