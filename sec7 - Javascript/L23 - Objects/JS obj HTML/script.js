var user = {
    name: "John",
    age: 34,
    gender: "male",
    isMarried: false,
    spell: ["wind", "water", "fire"],
    shout: function() {
        console.log("LOL!!");
    }
};
console.log(user);
// {name: 'John', age: 34, gender: 'male', isMarried: false}

console.log(user.name);
// john

user.favoriteFood = "spinach";
console.log(user);

user.isMarried = true;
console.log(user);

console.log(user.spell);
console.log(user.spell[0]);

console.log(user.shout());

var emptyObj = {};
var nullObj = null;
console.log(emptyObj);  //undefined
console.log(nullObj);   //null

emptyObj.name = "Jose";
console.log(emptyObj.name); // Jose

// nullObj.name = "Sasha";  //! Cannot set properties of null

var emptyList = [];
var list = [
    {
        username: "andy",
        password: "secret"
    },
    {
        username: "jess",
        password: "123"
    }
]
console.log(list[0].username + " : " + list[0].password);
console.log(list[1].username + " : " + list[1].password);
