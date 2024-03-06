//fs = file system module in NODE
const fs = require('fs');

fs.readFile('./hello.txt', (err, data) => {     //Callback --> read all-line --> then show result

    console.time('processTime') // chk: START time from...

    if(err) {
        console.log('Error: ', err);
    }
    console.log('Async: ', data.toString('utf8'));   //encode --> 'utf8' HTML Style

    console.timeEnd('processTime') // chk: END time...
});

const file = fs.readFileSync('./hello.txt');    //read file and do it now (ignore comparison)
console.log('Sync: ', file.toString());

//* APPEND -> Add new text in _TARGET FILEs
// fs.appendFile('./hello.txt', ' This is just added after', err => {
//     if(err){
//         console.log(err);
//     }
// });

//* WRITE -> create new Files can replace an existing File with ta (SAME NAME)
// fs.writeFile('bye.txt', 'Sad to see you go', err => {
//     if(err){
//         console.log(err);
//     }
// });

//* DELETE -> delete an exiting files one DIR
// fs.unlink('./bye.txt', err => {
//     if(err){
//         console.log(err);
//     }
//     console.log('Inception');
// });