//! - ES2020

// BigInt //-------------------------------------------------------------------

typeof 4;               // 'number'
typeof true;            // 'boolean'
typeof 1n;              // 'bigint'

Number.MAX_SAFE_INTEGER; // 9007199254740991

1n + 2n;    // 3n
typeof 3n   // 'bigint'

// Nullish Coalescing Operator // ---------------------------------------------

let will_pokemon = {
    pikachu: {
        species: 'Mouse Pokemon',
        height: 0.4,
        weight: 6
    }
}

let tim_pokemon = {
    raichu: {
        species: 'Mouse Pokemon',
        height: 0.8,
        weight: 30
    }
}

let p_weight = will_pokemon.pikachu.weight;
console.log(`weight: ${p_weight}`);     // weight: 6

let r_weight = tim_pokemon.raichu.weight;
console.log(`r_weight: ${r_weight}`);   // weight: 6
console.log(`r_weight: ${r_weight}`);   //! Cannot read properties of undefined (reading 'weight')

// Optional Chaining Operator ?. // ------------------------------------------
//** short hand check */
if (tim_pokemon.pikachu && tim_pokemon.pikachu.weight) {
    let tmp_weight = tim_pokemon.pikachu.weight;
    console.log(tmp_weight);    // undefined
} else {
    let tmp_weight = undefined;
    console.log(tmp_weight);    // undefined
}

let fixWeight = tim_pokemon?.pikachu?.weight
console.log(fixWeight);         // undefined

// Nullish Coalescing Operator ?? // ------------------------------------------
let mac_pokemon = {
    monkey: {
        species: 'homo',
        height: 1.2,
        weight: 25,
        power: 'red banana',
        food: 'candy',
        drink: '',
        habit: 0
    }
}

let power = mac_pokemon?.monkey?.food || 'no power';
console.log(power); // no power

let drink = mac_pokemon?.monkey?.drink || 'no power';
console.log(drink); // no power

let habit = mac_pokemon?.monkey?.habit ?? 'non specific';
console.log(habit); // 0

