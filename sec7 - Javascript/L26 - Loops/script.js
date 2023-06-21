console.log("hello".length);    // 5 items

var todoList = [
    "clean room",
    "brush teeth",
    "exercise",
    "study javascript",
    "eat healthy"
];
console.log(todoList);

var travelList = [
    "Italy",
    "Morocco",
    "Spain",
    "Sweden",
    "U.S.A"
];

//! ---------------------------------------------------------------
// for (var i=0; i<todoList.length; i++) {
//     console.log(i);
//     console.log(todoList[i] + "!");
//     todoList[i] = todoList[i] + "!"
// }
// console.log(todoList);

var todoLength = todoList.length;
// for (var i=0; i<todoLength; i++) {
//     todoList.pop();
// }
// console.log(todoList);

//! ---------------------------------------------------------------
for (var i=0; i<todoLength; i++) {
    console.log(i + " : " + todoList[i]);
}

function logOfList(list, i) {
    console.log(list, i);
}
todoList.forEach(logOfList);
travelList.forEach(logOfList);

//* short hand style of above
// todoList.forEach(
//     function(list ,i) {
//         console.log(list, i);
//     }
// )

//! ---------------------------------------------------------------
// var counterOne = 0;
// while (counterOne < 10) {
//     console.log(counterOne);
//     counterOne++;
// }

// var counterTwo = 10;
// while (counterOne > 0) {
//     console.log("while", counterOne);
//     counterOne--;
// }

//! ---------------------------------------------------------------
// var counterThree = 10;
// do {
//     console.log("do while", counterThree);
//     counterThree --;    
// } while (counterThree > 0);


