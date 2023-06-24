//! Symbol

let sym1 = Symbol();
let sym2 = Symbol('foo');
let sym3 = Symbol('foo');

sym1;   // Symbol()
sym2;   // Symbol(foo)
sym3;   // Symbol(foo)

sym2 === sym3;   // false