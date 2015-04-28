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
			mainPath(res, path);
		break;
		case '/library':
			fs.readFile('./book.txt', function(err, content){
				onFileResponse(err, content, res);
			});
		break;
		default:
			pageNotFound(res);
	}
}

function mainPath(res, path){
	res.writeHead(200, {'Content-type' : 'text/plain'});
	res.end('success with pathname -> ' + path + '\n');
}

function onFileResponse(err, content, res){
	if(err){
		res.writeHead(500);
		res.end('Cannot read file');
	}

	res.writeHead(200);
	res.end(content);
}

function pageNotFound(res){
	res.writeHead(404);
	res.end('404 - Not Found');
}

