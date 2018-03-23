
var express = require('express');
var app = express();

app.use(express.static('public'));
app.get('/snake.html', function (req, res) {
   res.sendFile( __dirname + "/" + "snake.html" );
})


var server = app.listen(3000, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("http://localhost:3000/snake.html")

});