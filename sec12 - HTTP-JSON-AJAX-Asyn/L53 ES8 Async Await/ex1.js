// Promises
movePlayer(100, 'Left')
    .then(() => movePlayer(400, 'Left'))
    .then(() => movePlayer(10, 'Right'))
    .then(() => movePlayer(330, 'Left'))

// ASYNC AWAIT
async function playerStart() {
    const first = await movePlayer(100, 'Left') //pause
    const second = await movePlayer(400, 'Left'); //pause
    await movePlayer(10, 'Right'); //pause
    await movePlayer(330, 'Left'); //pause
}

//-----------------------------------------------------------------------------
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(console.log)

async function fetchUsers() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json();
    console.log(data);
}
fetchUsers();

//-----------------------------------------------------------------------------
const urls = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums'
]

Promise.all(urls.map(url => 
    fetch(url).then(resp => resp.json())
)).then(array => {
    console.log('user', array[0])
    console.log('user', array[1])
    console.log('user', array[2])
}).catch('!Oops..')

const urls2 = [
    'https://jsonplaceholder.typicode.com/users123',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums'
]

const getData = async function() {
    try {
        const [ users, posts, albums ] = await Promise.all(
            urls.map(url => fetch(url).then(resp => resp.json())
        ))
        console.log('user', users)
        console.log('user', posts)
        console.log('user', albums)
    } catch (err) {
        console.log('!Oops..', err)
    }
    
}
getData();