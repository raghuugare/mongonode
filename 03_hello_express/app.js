var express = require('express'),
    app = express();

app.get('/', function(req, res){
    res.status(200).send('Hello World! :~)');
});

app.get('*', function(req, res) {
    res.status(404).send('Page not found! :~(');
});

app.listen(8080);
console.log('Express server listening on port 8080...');
