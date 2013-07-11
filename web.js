var express = require('express');
var fs = require('fs');
var buffer;

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send('Hello World 2!');
  buffer = fs.readFileSync('./index.html','utf8');
  buffer.toString();

});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

