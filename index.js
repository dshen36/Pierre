var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

var bodyParser = require('body-parser');
app.use(bodyParser.json());

var payloads = [];

app.get('/', function(request, response) {
  response.send(JSON.stringify(payloads));
});

app.get('/clear', function(request, response){
  payloads = [];
  response.send(JSON.stringify(payloads));;
});

app.post('/payload', function(request, response){
  payloads.push(request.body);
  console.log(request.body);
  response.send('added payload');
});

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
});