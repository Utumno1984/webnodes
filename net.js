var net = require('net');

var server = net.createServer(onRequest).listen(8080);
console.log('server is running at localhost:8080');
var clients = new Array();

function onRequest(socket){
	clients.push(socket);
	socket.on('data', function(data){
		for(var i = 0; i < clients.length; i++){
			if(clients[i] == socket) continue;
			clients[i].write(data);
		}
	});

	socket.on('end', function(){
		var i = clients.indexOf(socket);
		client.splice(i, 1);
	});
	
}