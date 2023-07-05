const basket = ['apples', 'banana', 'grapes'];

//1
for (let i = 0 ; i < basket.length ; i++) {
    console.log(basket[i]);
}

//2
basket.forEach(item => {
    console.log(item);
})

//3
basket.forEach(item => console.log(item));

//4 - for of...loop (Iterating)
//* arrays
for(item of basket) {
    console.log(item);
}

//* strings
for(item of 'basket') {
    console.log(item);
}
//b
//a
//s
//k
//e
//t

//5 - for in...loop (see objects properties)
//* enumerating for objects
const detailedBasket = {
    apples: 5,
    banana: 10,
    grapes: 1000
}
for(item in detailedBasket) {
    console.log(item);
}

for(item of detailedBasket) {
    console.log(item);  //! detailedBasket is not iterable
}

for(item in basket) {
    console.log(item);
}
// 0 -> apples
// 1 -> banana
// 2 -> grapes

Object.keys(detailedBasket);
// 0: "apples"
// 1: "banana"
// 2: "grapes"
