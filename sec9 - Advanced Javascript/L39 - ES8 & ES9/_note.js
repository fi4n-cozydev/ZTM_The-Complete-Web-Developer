let str1 = 'Turtle'.padStart(5);
console.log(str1);  // '     Turtle'

let str2 = 'Turtle'.padEnd(5);
console.log(str2);  // 'Turtle     '

//-----------------------------------------------------------------------------

const fun = (
    a,
    b,
    c,
    d,
    ) => {
    console.log(a); // 1
}
fun(1,2,3,4,);

//-----------------------------------------------------------------------------

Object.values
Object.entries
Object.keys

let obj = {
    user_0: 'Santa',
    user_1: 'Rudolf',
    user_3: 'Mr.Grinch'
}

Object.keys(obj).forEach((key, index) => {
    console.log(key, obj[key]);
})
//user_0 Santa
//user_1 Rudolf
//user_2 Mr.Grinch

Object.values(obj).forEach(value => {
    console.log(value);
})
// Santa
// Rudolf
// Mr.Grinch

Object.entries(obj).forEach(value => {
    console.log(value);
})
// (2) ['user_0', 'Santa']
// (2) ['user_1', 'Rudolf']
// (2) ['user_2', 'Mr.Grinch']

Object.entries(obj).map(value => {
    return value[1] + value[0].replace('user', '');
})
// (3) ['Santa_0', 'Rudolf_1', 'Mr.Grinch_2']

//Async Await