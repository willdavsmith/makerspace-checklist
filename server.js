var cors = require('cors');
var express = require('express');
var bodyParser = require("body-parser");
var app = express();
var fs = require('fs');
var path = require('path')
const PORT = 25485

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => res.sendFile("index.html",  {root: __dirname }) );

app.post('/api/send', (req, res) => {
    var data = req.body.data;
    fs.appendFile('checklistData.csv', data, function(err){});
    res.end("sent");
});

var server = app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}!`)
});
