var http = require('http');
var fs = require('fs');

http.createServer(function(req, res){
    fs.readFile('demofile1.html', function(err,data){
        res.writeHead(200,{'Content-type': 'text/html'});
        res.write(data);
        return res.end()
    })
    fs.writeFile('thongtin.txt', 'Trần Hoàng Thái, Ph19837, thaithph19837@fpt.edu.vn, 0973982126', function(err){
        if(err){
            console.log(err);
        }else{
            console.log('Write operation complete,')
        }
    })
}).listen(8080);