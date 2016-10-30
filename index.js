var express = require('express');
var server = express();

var port = process.env.PORT || 8080;

server.use(express.static(__dirname+'../my_website'));



server.get('/', function(request, response){
  response.sendFile('../my_website/HTML/index.html', {root: __dirname});
});

server.listen(port, function(){
  console.log('Now listening on port ...' + port);
});