var express = require('express');
var app = express();

app.use(express.static('public'));

// app.get('/', function (request, response) {
//     console.log('get请求');

//     response.send('hello world get 12.js');
// });

app.get('/list_user', function (resquest, response) {
    response.send('list_user');
});

app.get('/ab*cd', function (request, response) {
    response.send('正则匹配');
});

app.post('/', function (request, response) {
    console.log('post请求');

    response.send('hello world  post 12.js')
});

var server = app.listen(8081, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('host:' + host + ",port:" + port);
});