var express = require('express');
var app = express();
var path = require('path');


var fs = require('fs');
var base_url=process.env.BASE_URL;
//var base_url="https://uatenviro33.expy.bio/";
//var base_url="https://velectico.net.in/";
const json = require('body-parser/lib/types/json');
eval(fs.readFileSync(process.env.CONNECTION_URL)+''); 

//20-may-2021

require('custom-env').env('dev', __dirname);
//13-jul-2021 jitsee meeting
//var model=require('/home/velectic/node_code/adm/model.js');
var model=require(process.env.MODEL_URL);

console.log(model);
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