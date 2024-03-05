//*-> NOT WORK WITH package.json -> "Type" = "module"
const http = require('http');

const server = http.createServer((request, response) => {
    // console.log('I hear you!. thanks for the request');

    // console.log('headers: ', request.headers);
    console.log('method: ', request.mehod);
    console.log('url: ', request.url);

    // response.setHeader('Content-Type', 'text/html');
    // response.end('<h1>Hello there!</h1>');

    const user = {
        name: 'Jack',
        hobby: 'Skating'
    }
    response.setHeader('Content-Type', 'application/json');
    response.end(JSON.stringify(user));
})

server.listen(3000);    // localhost:3000