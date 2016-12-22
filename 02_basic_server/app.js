var http = require('http');

var server = http.createServer(function(req, res) {
    res.write(200, {"Content-type": "plain/text"});
    res.end("Hello, World!\n");
});

console.log("Server listening on port 8080...");
server.listen(8080);
