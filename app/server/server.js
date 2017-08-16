const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
// app.use( express.static( __dirname + '/../public/' ) )

//cors

var arr = [1, 2, 3, 4];


app.get('/api/numbers', (req, res) => {
    res.send(arr)
})


app.listen(3041, () => {
    console.log("Listening on port " + 3041)
})