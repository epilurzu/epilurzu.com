var http = require('http');
var fs = require('fs');
var url = require('url');

http.createServer(function (req, res) {
    var request = url.parse(req.url, true);
    var action = request.pathname;

        if (action == '/images/502.svg') {
            fs.readFile('home.html', function(err, data) {
                var img = fs.readFileSync('./images/502.svg');
                res.writeHead(200, {'Content-Type': 'image/svg+xml'});
                res.end(img, 'binary');
            });
        }
        else{
            fs.readFile('home.html', function(err, data) {
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.write(data);
                res.end();
            });
        }

}).listen(13904);