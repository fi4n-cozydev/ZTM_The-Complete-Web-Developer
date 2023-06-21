var database = [
    {
        username: "tom",
        password: "123"
    },
    {
        username: "andy",
        password: "000"
    },
    {
        username: "mark",
        password: "777"
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

function isUserValid(userName, passWord) {
    for (var i=0; i<database.length; i++){
        if(database[i].username === userName && database[i].password === passWord) {
            return true;
        } 
    }
    return false;
}

function signIn(user, passwd) {   
    // if (user === database[0].username && passwd === database[0].password) {
    //     console.log(newsFeed);
    // } else {
    //     alert("incorrect username or password!")
    // }

    // console.log(isUserValid(user, passwd))
    if(isUserValid(user, passwd)) {
        console.log(newsFeed);
    } else {
        alert("incorrect username or password!")
    }
}

signIn(userNamePrompt,passWordPrompt);