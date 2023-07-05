// ---------------------------------------------------------------
//! reference type

var obj1 = { value: 10 };
var obj2 = obj1;
var obj3 = { value: 10 };

console.log(obj1 === obj2);     // true
console.log(obj1 === obj3);     // false

obj1.value = 99;
console.log(obj1);  // {value: 99}      
console.log(obj2);  // also {value: 99}
console.log(obj3);  // {value: 10}

obj2.value = 22;
console.log(obj1);  // {value: 22}
console.log(obj2);  // also {value: 22}

//* obj1 and obj2 point to the same memory address
//* that why then value has changed on both Objects

// ---------------------------------------------------------------
//! context vs scope

function scope() {
    let a = a;
}

console.log(this === window)    // true
this.alert("hello");
window.alert("hello");

const o1 = {
    a: function() {
        console.log(this);
    }
}

// ---------------------------------------------------------------
//! instantiation

class Player {
    constructor(name, type) {
        console.log('player', this);    // player Wizard {}
        this.name = name;
        this.type = type;
    }
    introduce() {
        console.log(`Hi, I'm ${this.name}, I'm a ${this.type}`);
    }
}

class Wizard extends Player {
    constructor(name, type) {        
        super(name, type)
        console.log('wizard', this);    // wizard Wizard {name: 'Sam', type: 'Healer'}
    }
    play() {
        console.log(`WEEE!, I'm a ${this.type}`);
    }
}

const wizard1 = new Wizard('Sam', 'Healer');
const wizard2 = new Wizard('Joe', 'Dark Magic');

wizard1.play();         // WEEE!, I'm a Healer
wizard1.introduce();    // Hi, I'm Sam, I'm a Healer

// ---------------------------------------------------------------
//! Classical Inheritance (NOT recommend)

var Customer = function(name, type) {
    this.name = name;
    this.type = type;
}

Player.prototype.introduce = function() {
    console.log(`Hi, I'm ${this.name}, I'm a ${this.type}`);
}

var customer1 = new Player("Adam", "Doctor");
var customer2 = new Player("Jane", "Actor");

customer1.play = function() {
    console.log(`WEEE!, I'm a ${this.type}`);
}