const str = "superman fly can't fly";
console.log(str)        // "superman fly can't fly"

const newStr = str.replaceAll('fly', 'die');
console.log(newStr);    // "superman die can't die"

const s = str.replace('fly', 'iron-man');
console.log(s);         // "superman iron-man can't fly"

