<<<<<<< HEAD
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
=======
var http = require('http') ;
var fs = require('fs') ;
var url = require('url') ;
var cfg = JSON.parse(fs.readFileSync('./server-config/serverAddress.json', 'utf-8')) ;
var server = http.createServer(onrequest) ;
var dispatcher = require( './server-modules/httpdispatcher.js' ) ;
console.log(cfg.route);

if(cfg.route){
	var method,
		path,
		filePath ;

	for(i in cfg.route){

		
		method = cfg.route[i].method ;
		path = cfg.route[i].path ;
		filePath = cfg.route[i].file ;
		console.log(method);
		console.log(path);
		console.log(filePath);
		dispatcher.addListener(method, path, filePath);
	}
}


function onrequest(req, res){
	dispatcher.dispatch(req, res) ;
} ;

console.log( 'server start at --> ' + cfg.server.address + ':' + cfg.server.port ) ;
console.log(dispatcher.list) ;
server.listen(cfg.server.port, cfg.server.address) ;
>>>>>>> 72bf9db75ce50b3214838128a189a5ecedeee773
