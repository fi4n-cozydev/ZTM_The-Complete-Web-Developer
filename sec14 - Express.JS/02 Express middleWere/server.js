const express = require('express');

const app = express();

app.use((req, res, next) => {
    console.log('<h1>Hello!</h1>');
    next(); // go to the less of code... below
});

app.get('/', (req, res) => {
    res.send('test123');
})

app.listen(3000);