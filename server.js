var express = require('express');
var app = express();
var path = require('path');



app.use(express.static(path.resolve(__dirname, './public')));
app.get('*', async function (req, res) { 

const filePath = path.resolve(__dirname, './public', 'index.html');
res.sendFile(filePath);

});

app.listen(2080, function () {
console.log('Example app listening on port 2080!');
});