const express = require('express');
const JSRSASign = require('jsrsasign');

const token = "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IndoaXNreWdyYW5kZWUiLCJzdWJqZWN0IjoiS3VzaGFncmEgU2luZ2ggQmlzZW4iLCJwcm9wZXJ0eSI6IkhhaXItQ29sb3IiLCJ2YWx1ZSI6IkJsYWNrIiwiQWdlIjoyMn0.jQaLHl66cpS1JWWn-G6KhuDcGWXARXUTzWnOKMS_Dx-Mi1XTH7MLSh8y9WcF2d1JcXoXDOlSFKc80B01AOImrQ"
const algorithm = "HS512";
const key = "$Kusahgra1234";

console.log(JSRSASign.jws.JWS.verifyJWT(token, key, {
    alg : [algorithm]
}));

console.log("----------------------");

// Decoding

const sJWS = token;
const aJWT = sJWS.split(".");
const uHeader = JSRSASign.b64utos(aJWT[0]);
const uClaim = JSRSASign.b64utos(aJWT[1]);
const pHeader = JSRSASign.jws.JWS.readSafeJSONString(uHeader);
const pClaim = JSRSASign.jws.JWS.readSafeJSONString(uClaim);

console.log("Header is : ", pHeader);
console.log("Claim value is: ", pClaim);