var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {
    if (req.url === '/page-c.html') {
        res.writeHead(301, { "Location": "http://" + req.headers['host'] + '/page-b.html' });
        return res.end();
    } else {
        console.log(req.url);
        fs.readFile('.' + req.url, function(err, data) {
            if (err) {
                res.writeHead(404);
                res.write('File not found!???');
                return res.end();
            }
            res.writeHead(200);
            res.write(data.toString('utf8'));
            return res.end();
        });
    }
}).listen(8080);
