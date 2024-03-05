const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('getting_ROOT');
});

app.get('/profile', (req, res) => {
    res.send('getting_PROFILE');
});

app.post('/profile', (req, res) => {    
    console.log(req.body);

    // const usr = {
    //     name: 'Kelly',
    //     hobby: 'Poker'
    // }

    // res.send(usr);
    res.send('Success');
});

app.listen(3000);