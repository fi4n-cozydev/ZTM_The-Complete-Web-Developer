//! Object properties

const name = 'john snow';

const record = {
    [name]: 'hello',
    [1 + 2]: 'hi'
}
console.log(record);    // {3: 'hi', john snow: 'hello'}

// ----------------------------------------------------------------------------
// const a = "Simon";
// const b = true;
// const c = {};

// const obj {
//     t1: a,
//     t2: b,
//     t3: c
// }

//? or using same name
// const obj { a,b,c }