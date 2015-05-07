var http = require('http') ;
var fs = require('fs') ;
var url = require('url') ;
var cfg = JSON.parse(fs.readFileSync('./server-config/serverAddress.json', 'utf-8')) ;
var server = http.createServer(onrequest) ;
var dispatcher = require( './server-modules/httpdispatcher.js' ) ;
console.log(cfg.route);

/*
dispatcher.addListener("get", "/", function (req, res){
	fs.readFile("./server-pages/home.html", function (err, content){
		if(err){
			res.writeHead(500) ;
			res.end( 'Error loading file --> ' + err ) ;
		}
		res.writeHead(200) ;
		res.end(content) ;
	}) ;
}) ;

dispatcher.addListener("get", "/page1", function (req, res){
	fs.readFile("./server-pages/page1.html", function (err, content){
		if(err){
			res.writeHead(500) ;
			res.end( 'Error loading file --> ' + err ) ;
		}
		res.writeHead(200) ;
		res.end(content) ;
	}) ;
}) ;

dispatcher.addListener("get", "/page2", function (req, res){
	fs.readFile("./server-pages/page2.html", function (err, content){
		if(err){
			res.writeHead(500) ;
			res.end( 'Error loading file --> ' + err ) ;
		}
		res.writeHead(200) ;
		res.end(content) ;
	}) ;
}) ;
*/

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
