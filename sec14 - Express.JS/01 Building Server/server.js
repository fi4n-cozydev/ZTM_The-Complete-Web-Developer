const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('getting_ROOT');
});

app.get('/profile', (req, res) => {
    res.send('getting_PROFILE');
});

app.post('/profile', (req, res) => {    
    const usr = {
        name: 'Kelly',
        hobby: 'Poker'
    }
    res.send(usr);
});

app.listen(3000);