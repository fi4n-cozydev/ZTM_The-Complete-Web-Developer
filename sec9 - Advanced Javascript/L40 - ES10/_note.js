const arr = [1,2,3,4,5];
arr.flat();     //(5) [1, 2, 3, 4, 5]

const arr2 = [1,[2,3],[4,5]];
arr2.flat();    //(5) [1, 2, 3, 4, 5]

const arr3 = [1,2,[3,4,[5]]];
arr3.flat();    //(5) [1, 2, 3, 4, Array(1)
arr3.flat(2);   //(5) [1, 2, 3, 4, 5]

const zoo = [['A', 'B'], 'C', 'D', ['E', 'F'], [[[['G']]], 'H'], ['I', 'J']];
zoo.flat(50);   //(10) ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']

const entries = ['bob', 'emy',,,,,,'tim'];
entries.flat(); //(3) ['bob', 'emy', 'tim']

//--------------------------------------------------------------------------
const newZoo = zoo.flatMap(animal => animal + '!');
newZoo;         //(6) ['A,B!', 'C!', 'D!', 'E,F!', 'G,H!', 'I,J!']

//--------------------------------------------------------------------------
let usrEmail1 = '               tom@gmail.com';
let usrEmail2 = 'addy@gmail.com               ';
console.log(usrEmail1.trimStart()); //tom@gmail.com
console.log(usrEmail2.trimEnd());   //addy@gmail.com

//--------------------------------------------------------------------------
const userProfiles = [['Tom', 23], ['Judy', 40], ['Tim', 18]];
Object.fromEntries(userProfiles);   //{Tom: 23, Judy: 40, Tim: 18}

let obj = Object.fromEntries(userProfiles);
Object.entries(obj);                //(3) [Array(2), Array(2), Array(2)]

//--------------------------------------------------------------------------
try {
    4 + 5;          // 9
    true + 'hi';    // 'truehi'
    bob + 'hi';     //! undefined
} catch (error) {
    console.log('you messed up' + error); //you messed up ReferenceError: bob is not defined
}

try {
    4 + 5;          // 9
    true + 'hi';    // 'truehi'
    bob + 'hi';     //! undefined
} catch {
    console.log('you messed up'); //you messed up
}


