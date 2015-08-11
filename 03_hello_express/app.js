var express = require('express'),
    app = express();

app.get('/', function(req, res){
    res.send('Hello World! :~)');
});

app.get('*', function(req, res) {
    res.send(404, 'Page not found! :~(');
});

app.listen(8080);
console.log('Express server listening on port 8080...');
