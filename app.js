var express = require("express");
var cors = require("cors");
var path = require('path');
var fs = require('fs');
var app = express();

app.use(cors());


app.get("/test", (req, res, next) => {
    res.json(["Tony","Lisa","Michael","Ginger","Food"]);
});


app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});


app.listen(8080, () => {
 console.log("Server running on port 3000");
});