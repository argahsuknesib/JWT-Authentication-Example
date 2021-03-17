const express = require('express');
const app = express();
const port = 5000;

const JSRSASign = require('jsrsasign');

const claims = {
    username : "whiskygrandee",
    subject : "Kushagra Singh Bisen",
    property : "Hair-Color",
    value: "Black",
    Age : 22
}

const key = "$Kusahgra1234" //Password.

const header = {
    alg : "HS512",
    typ : "JWT"
};

var sHeader = JSON.stringify(header);
var sPayload = JSON.stringify(claims);

const sJWT = JSRSASign.jws.JWS.sign("HS512", sHeader, sPayload, key);

console.log(sJWT);


app.get("/", (req, res) => {
    res.send("Welcome to the Ontology Editor!")
});

app.listen(port, () => console.log(`We are listening on the port ${port}`));


