const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
// app.use( express.static( __dirname + '/../public/' ) )
app.use(cors());

//cors

var arr = [{ num: 1 }, { num: 2 }, { num: 3 }, { num: 4 }];


app.get('/api/numbers', (req, res) => {
    res.send(arr)
})


app.listen(3041, () => {
    console.log("Listening on port " + 3041)
})