var express = require('express');
var app = express();
var path = require('path');



app.use(express.static(path.resolve(__dirname, './build')));
app.get('*', async function (req, res) { 

const filePath = path.resolve(__dirname, './build', 'index.html');
console.log("here");
res.sendFile(filePath);

});

app.listen(2080, function () {
console.log('Example app listening on port 2080!');
});