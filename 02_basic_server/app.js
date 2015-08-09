var http = require('http');

var server = http.createServer(function(req, res) {
    response.write(200, {"Content-type": "plain/text"});
    response.end("Hello, World!\n");
});

console.log("Server listening on port 8080...");
server.listen(8080);
