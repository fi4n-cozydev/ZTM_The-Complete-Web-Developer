var list = ["tiger", "cat", "bird", "bear"];

console.log(list[1]);
// cat

console.log(list);
// (4) ['tiger', 'cat', 'bird', 'bear']

list.shift();                       // remove front item
console.log(list);
// (3) ['cat', 'bird', 'bear']

console.log(list.length);           // chk length

list.pop()                          // remove last item
console.log(list);
// (2) ['cat', 'bird']

list.push("elephant");              // add new item from the end of array
console.log(list);
// (3) ['cat', 'bird', 'elephant']

list.sort();
console.log(list);
// (3) ['bird', 'cat', 'elephant']

list.reverse();
console.log(list);
// (3) ['elephant', 'cat', 'bird']

//* create new array by get oldArr_item & add new [array/item]
var newList = list.concat(["bee", "deer"])
console.log(list);
// (3) ['elephant', 'cat', 'bird']
console.log(newList);
// (5) ['cat', 'bird', 'elephant', 'bee', 'deer']

var booleans = [true, false, true];

var functionList = [
    function apple(){
        console.log("apple");
    }
];

var mixedList = [
    "apple",
    3,
    undefined,
    true,
    function hello(){ console.log("Hello") }
];

var receipt = [
    ["bread", "meat", "vegetable", "egg", "tomato sauce"],
    ["bread", "sausage", "tomato sauce"]
]
console.log(receipt[0][1]);
console.log(receipt[1][2]);

//! -----------------------------------------------------------------
// using this array,
var array = ["Banana", "Apples", "Oranges", "Blueberries"];
console.log(array);

// 1. Remove the Banana from the array.
array.shift();
console.log(array);

// 2. Sort the array in order.
array.sort();
console.log(array);

// 3. Put "Kiwi" at the end of the array.
array.push("Kiwi");
console.log(array);

// 4. Remove "Apples" from the array.
array.splice(0,1);
console.log(array);

// 5. Sort the array in reverse order. (Not alphabetical, but reverse
// the current Array i.e. ['a', 'c', 'b'] becomes ['b', 'c', 'a'])
array.reverse();
console.log(array);

// you should have at the end:
// ["Kiwi", "Oranges", "Blueberries"]

// using this array,
var array2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
// access "Oranges".
console.log(array2[1][1][0]);
//1D -> index 1
//2D -> index 1
//3D -> index 0

array2 = 
[
    "Banana",
    [
        "Apples",
        [
            "Oranges"
        ],
        "Blueberries"
    ]
];

