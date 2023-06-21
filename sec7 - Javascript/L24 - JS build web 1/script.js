var database = [
    {
        username: "tom",
        password: "123"
    }
];

var newsFeed = [
    {
        username: "bob",
        timeline: "so tired from all that learning"
    },
    {
        username: "jan",
        timeline: "Javascript is soo col!"
    }
];

var userNamePrompt = prompt("What's your username?");
var passWordPrompt = prompt("What's your password?");

function signIn(user, passwd) {
    if (user === database[0].username && 
        passwd === database[0].password) {
            console.log(newsFeed);
        } else {
            alert("incorrect username or password!")
        }
}

signIn(userNamePrompt,passWordPrompt);