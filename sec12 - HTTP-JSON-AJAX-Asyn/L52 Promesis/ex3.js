const promise = new Promise((resolve, reject) => {
    if (true) {
        resolve('Stuff Worked');
    } else {
        reject('Error, it broke')
    }    
})

const promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'HIII')
})

const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, 'POOKIE')
})

const promise4 = new Promise((resolve, reject) => {
    setTimeout(resolve, 5000, 'OK, I\'m in NOW!')
})

Promise.all([promise, promise2, promise3, promise4])
    .then(values => {
        console.log(values);
    })

//1
promise.then(result => console.log(result));

//2
promise
    .then(result => result + '!')
    .then(result2 => {
        console.log(result2);
    })

//3
promise
    .then(result => result + '!')
    .then(result2 => {
        throw Error
        console.log(result2);
    })
    .catch(() => console.log('errror!'));

//4
promise
    .then(result => {
        throw Error
        return result + '!'
    })
    .then(result2 => {        
        console.log(result2);
    })
    .catch(() => console.log('errror!'));

//5
promise
    .then(result => result + '!')
    .then(result2 =>  result2 + '?')
    .catch(() => console.log('errror!'))    //*catch an error between them.
    .then(result3 => {
        console.log(result3 + '#');
    })