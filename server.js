var http = require('http');
var url = require('url');

var server = http.createServer(onrequest);

function onrequest (req, res){
	res.writeHead(200, {"Content-type" : "text/plain"});

	interval = setInterval(function(){
	
	res.write('repeat next 1000 milliseconds\n');
	}, 1000);

	setTimeout(function(){
		res.end('end');
		clearInterval(interval)
	}, 5000);
	
}

server.listen(3000, "127.0.0.1");

console.log('Server running at http://127.0.0.1:3000/');