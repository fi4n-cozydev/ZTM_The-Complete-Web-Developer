//* original style
// var array = [1, 2, 3];

//* original new style
const array = [1, 2, 9];

// ------------------------------------------------------------------
//* forEach

const double = [];
const newArray = array.forEach((num) => {
    double.push(num*2);
})
console.log(array);                 // (3) [1, 2, 9]
console.log('forEach', double);     // (3) [2, 4, 18]

// ------------------------------------------------------------------
//* map
const mapArray = array.map((num) => {
    return num*2;
});
console.log('map', mapArray);       // (3) [2, 4, 18]

//short hand for 1 argument
const mapArray2 = array.map(num => num*3);
console.log('map2', mapArray2);     // (3) [3, 6, 27]

// ------------------------------------------------------------------
//* filter

const filterArray = array.filter(num => { 
    return num > 5;
});
console.log('filter', filterArray);     // [9]

const filterArray2 = array.filter(num => num === 2);
console.log('filter2', filterArray2);   // [2]

// ------------------------------------------------------------------
//* reduce -> accumulator is a starter number to action...

const reduceArray = array.reduce((accumulator, num) => {
    return accumulator + num;   // reduce 12
}, 0);
console.log('reduce', reduceArray);

const rdArr = array.reduce((start, num) => start + num, 5);
console.log('rdArr', rdArr);    // rdArr 17