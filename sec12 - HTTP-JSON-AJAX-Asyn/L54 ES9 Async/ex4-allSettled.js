//! - allSettled

const promiseOne = new Promise((resolve, reject) =>
    setTimeout(resolve, 6000)
)
const promiseTwo = new Promise((resolve, reject) =>
    setTimeout(reject, 3000)
)

Promise.all([promiseOne, promiseTwo])
    .then(data => console.log(data))
    .catch(err => console.log('failed..', err));
//failed.. undefined

Promise.allSettled([promiseOne, promiseTwo])
    .then(data => console.log(data))
    .catch(err => console.log('failed..', err));
// 0: {status: 'fulfilled', value: undefined}
// 1: {status: 'rejected', reason: undefined}
// length: 2
// [[Prototype]]: Array(0)
// Promise {<fulfilled>: undefined}