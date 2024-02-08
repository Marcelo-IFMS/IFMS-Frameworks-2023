var http = require('http');
var server = http.createServer(function(req,res){
    res.end("<html> <body> Primeiro projeto Node - HTML </body></html>")
});

server.listen(3000);