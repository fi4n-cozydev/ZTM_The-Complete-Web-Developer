//* Complete the below questions using this array:
const array = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"]
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"]
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"]
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"]
  },

];

//*Create an array using forEach that has all the usernames with a "!" to each of the usernames
let newArr = [];
array.forEach(user => {
  let {username} = user;
  username = username + "!";
  newArr.push(username);
})
console.log(newArr); // (4) ['john!', 'becky!', 'susy!', 'tyson!']

//*Create an array using map that has all the usernames with a "? to each of the usernames
const mapArr = array.map(user =>{
  let {username} = user;
  return username + "?";
})
console.log(mapArr); // (4) ['john?', 'becky?', 'susy?', 'tyson?']


//*Filter the array to only include users who are on team: red
const filterArr = array.filter(user => user.team === "red");
console.log(filterArr);
// 0: {username: 'john', team: 'red', score: 5, items: Array(3)}
// 0: {username: 'susy', team: 'red', score: 55, items: Array(3)}

//*Find out the total score of all users using reduce

// (1), what is the value of i?
// (2), Make this map function pure:
const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => {
	console.log(num, i);
	alert(num);
	return num * 2;
})
console.log(newArray);

const newA = array.map((num, i) => num * 2);
console.log(newA);

//*BONUS: create a new list with all user information, but add "!" to the end of each items they own.
const answer = array.map(user => {
	user.items = user.items.map(item => {
		return item + "!"
	});
	return user;
})
console.log(answer);
