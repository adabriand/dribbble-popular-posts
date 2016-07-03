var express = require('express');
var app = express();
var isDevMode = process.argv.length > 2 && process.argv[2] === '-d';
var processPort = process.env.PORT || 3000;
var processHost = process.env.HOST || 'localhost';
var sourceFiles = isDevMode ? '/frontend/src' : '/frontend/dist';

app.use(express.static(__dirname + sourceFiles));
app.listen(processPort, function () {
    console.log('Server running on http://' + processHost + ':' + processPort);
});
