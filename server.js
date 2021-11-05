var express = require('express');
var app = express();
var path = require('path');


var fs = require('fs');
console.log("here");

console.log(__dirname);
require('custom-env').env('dev', __dirname);
console.log(process.env.CONNECTION_URL);
var base_url=process.env.BASE_URL;
const json = require('body-parser/lib/types/json');
eval(fs.readFileSync(process.env.CONNECTION_URL)+''); 

var model=require(process.env.MODEL_URL);

console.log(model);

app.use(express.static(path.resolve(__dirname, './build')));
app.get('*', async function (req, res) { 

const filePath = path.resolve(__dirname, './build', 'index.html');
console.log("here");
res.sendFile(filePath);

});

app.listen(2080, function () {
console.log('Example app listening on port 2080!');
});