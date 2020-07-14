var express = require("express");
var cors = require("cors");
var path = require('path');
var fs = require('fs');
var app = express();
const {OAuth2Client} = require('google-auth-library');
const client = new OAuth2Client("660763330339-jonhe9afgjptbuk61duuqk34h81iamrc.apps.googleusercontent.com");

app.use(cors());

app.use(express.json())


app.get("/test", (req, res, next) => {
    res.json(["Tony","Lisa","Michael","Ginger","Food"]);
});


app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.post('/verify', function(req, res) {
    

    var token = req.body.idToken;
    console.log("New Token reqeust: "+token);
    console.log(req.body);

    async function verify() {
        const ticket = await client.verifyIdToken({
            idToken: token,
            audience: "660763330339-jonhe9afgjptbuk61duuqk34h81iamrc.apps.googleusercontent.com",  
        });
        const payload = ticket.getPayload();
        const userid = payload['sub'];
        console.log("userid: "+userid)
        console.log(payload);

        res.send('Hello World!');
      }
      verify().catch(console.error);

});


app.listen(8080, () => {
 console.log("Server running on port 8080");
});

