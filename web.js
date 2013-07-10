var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

var filename = "index.html";
var file = fs.readFileSync(filename, function (err, data) {
  if (err) throw err;
  console.log(data);
});
var buffer = new Buffer(file, "utf-8");

app.get('/', function(request, response) {
  response.send(buffer.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
