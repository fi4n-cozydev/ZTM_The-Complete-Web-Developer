//! Template string

const fname = "Sally";
const age = 35;
const pet = "car";

// const greeting = "Hello" + name + "you seem to be doing" + greeting + "!"

const greetingBestWay = `hello ${fname} you seem to be ${age+10}. What a lovely ${pet} you have.`;
console.log(greetingBestWay); // hello Sally you seem to be 45. What a lovely car you have.
