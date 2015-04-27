/*
var http = require('http');
var io = require('socket.io').listen(http);
var fs = require('fs');

var server = http.createServer(onresponse);
server.listen(3000, "127.0.0.1");

function onresponse(req, res){
	fs.readFile('./library/' + 'book.txt', function(err, content){
		if(err){
			res.writeHead(500);
			return res.end('error reading file');
		}

		res.writeHead(200);
		return res.end(content);
	});
}
*/

//loading modules and create http server
var http = require('http');
var fs = require('fs');
var url = require('url') ;
var server = http.createServer(onresponse).listen(3000, '127.0.0.1');

//1st callback on success
function onresponse(req, res){
	var path = url.parse(req.url).pathname;
	console.log('this is the pathname -> ' + path );

	switch(path){
		case '/':
			res.writeHead(200, {'Content-type' : 'text/plain'});
			res.end('success with pathname -> ' + path + '\n');
		break;
		case '/library':
			fs.readFile('./book.txt', function(err, content){
				onResource(err, content, res);
			});
		break;
		default:
			pageNotFound(res);
	}
}

function pageNotFound(res){
	res.writeHead(404);
	res.end('404 - Not Found');
}

function onResource(err, content, res){
	if(err){
		res.writeHead(500);
		res.end('Cannot read file');
	}

	res.writeHead(200);
	res.end(content);
}