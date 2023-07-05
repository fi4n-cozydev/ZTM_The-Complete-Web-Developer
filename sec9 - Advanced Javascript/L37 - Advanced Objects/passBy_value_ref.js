var a = 5;
var b = a;  // passBy value
var c = a;  // passBy ref

let obj1 = {name: 'Yao', password: '123'};
let obj2 = obj1;

obj2.password = 'easypeasy';

console.log(obj1);  // {name: 'Yao', password: 'easypeasy'}
console.log(obj2);  // {name: 'Yao', password: 'easypeasy'}

// -----------------------------------------------------------------

var d = [1,2,3];
var e = t;
d.push(99);
console.log(d); // (4) [1, 2, 3, 99]
console.log(e); // (4) [1, 2, 3, 99]

var f = [].concat(d);
f.push(999);
console.log(f); // (5) [1, 2, 3, 99, 999]

// -----------------------------------------------------------------

let obj = {a: 'a', b: 'b', c: 'c'}
let clone = Object.assign({}, obj);
let clone2 = {...obj}

obj.c = 5;
console.log(obj);       // {a: 'a', b: 'b', c: 5}
console.log(clone);     // {a: 'a', b: 'b', c: 'c'}
console.log(clone2);    // {a: 'a', b: 'b', c: 'c'}

// -----------------------------------------------------------------

let data = {
    a: 'a',
    b: 'b',
    c: {
        deep: 'try to copy me!'
    }
};
let tryMe = {...data}
let superClone = JSON.parse(JSON.stringify(data));

data.c.deep = 'ICU NOW!';
console.log(data);          // {a: 'a', b: 'b', c: {deep: 'ICU NOW!'}}
console.log(tryMe);         // {a: 'a', b: 'b', c: {deep: 'ICU NOW!'}}
console.log(superClone);    // {a: 'a', b: 'b', c: {deep: 'try to copy me!'}}
