//Object spread operator
const animals = {
    tiger: 23,
    lion: 3,
    monkey: 12
}

const { tiger, ...rest } = animals;
//try console on browser
//tiger -> 23
//rest  -> {lion: 3, monkey: 12}

//----------------------------------------------------------
//ES6
const arrayNum = [1,2,3,4,5];
function sum (a, b, c, d, e) {
    return a + b + c + d + e;
}
sum(...arrayNum);
// 15
sum(1,2,3,4,5)
//15

//----------------------------------------------------------
const animals2 = {
    tiger: 23,
    lion: 3,
    monkey: 12,
    bird: 34
}

function objectSpread(p1, p2, p3) {
    console.log(p1)
    console.log(p2)
    console.log(p3)
}

const { tiger, lion, ...rest } = animals2;

objectSpread(tiger, lion, rest);

// 23
// 3
// {monkey: 12, bird: 34}
