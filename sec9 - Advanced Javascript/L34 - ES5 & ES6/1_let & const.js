//! let   > var
//! const > can't change value later

const player = "bob";
let experience = 100;
let level = false;

if(experience > 90) {
    let level = true;
    console.log("inside", level);   // inside true
}

console.log("outside", level);      // outside false

// this case can change value
const obj = {
    player: 'Andy',
    exp: 100,
    level
};
console.log(obj);   // {player: 'Andy', exp: 100, level: false}

obj.player = 'Jame';
console.log(obj);   // {player: 'Jame', exp: 100, level: false}
