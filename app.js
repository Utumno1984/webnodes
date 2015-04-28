var http = require('http');
var fs = require('fs');
var url = require('url') ;
var config = JSON.parse(fs.readFileSync('./config/serverAddress.json', 'utf-8'));
var server = http.createServer(onresponse).listen(config.app.server.port, config.app.server.address);
console.log('server run at ' + config.app.server.address + ':' + config.app.server.port);



console.log(config);
//1st callback on success
function onresponse(req, res){
	var path = url.parse(req.url).pathname;
	console.log('this is the pathname -> ' + path );

	switch(path){
		case '/':
			mainPath(res, path);
		break;
		case '/library':
			fs.readFile('./library/book.txt', function(err, content){
				onResource(err, content, res);
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

function pageNotFound(res){
	res.writeHead(404);
	res.end('404 - Not Found');
}

function onResource(err, content, res){
	if(err){
		res.writeHead(500);
		return res.end('Cannot read file');
	}

	res.writeHead(200);
	return res.end(content);
}