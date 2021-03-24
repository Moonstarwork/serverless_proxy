var http = require('http')
var httpProxy = require('http-proxy')

var index = httpProxy.createProxyServer();

index.on('error', function(err, req, res) {
    res.end();
});

var proxy_server = http.createServer(function(req, res) {
    // index.web(req, res, {
    //     target: 'http://127.0.0.1:8000'
    // });
    index.web(req, res, {
        target: 'https://b1d1b2ea77a3.ngrok.io'
    });
});

proxy_server.listen(9000, function() {
    console.log('index server is running ');
});
