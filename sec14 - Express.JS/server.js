const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// app.use(bodyParser.urlencoded({extended: false}));
// app.use(bodyParser.json());

//app.get('/:id', (req, res) => {
    //console.log(req.query);     //*--> http://localhost:3000/?name=Tim&age=50
    // req.body
    // console.log(req.headers);

    //console.log(req.params);    //*--> app.get('/:id', (req, res) => {..}
    //res.status(404).send("not found");

    // res.send('getting_ROOT');
//});

//*--> work with "/public/index.html"
app.use(express.static(__dirname + '/public'))

app.listen(3000);