// function sayHello() {
//     console.log("Hello!");
//     console.log("John");
// }
// sayHello();


// var sayBye = function() {
//     console.log("bye!");
// }
// sayBye();


// function sing(song) {
//     console.log(song);
// }
// sing("album_1");
// sing("album_2");


// function multiply(a, b) {    
//     if(a > 10 || b > 10) {
//         return "that's too hard";
//     } else {
//         return a * b;
//     }
// }
// alert(multiply(5,10));
// alert(multiply(11,2));


// var total = multiply(3,7);
// alert(total);

function checkDriverAge(age) {
	if (Number(age) < 18) {
		return "Sorry, you are too yound to drive this car. Powering off";
	} else if (Number(age) > 18) {
		return "Powering On. Enjoy the ride!";
	} else if (Number(age) === 18) {
		return "Congratulations on your first year of driving. Enjoy the ride!";
	}
}