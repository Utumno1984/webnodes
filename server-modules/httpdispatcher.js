function HttpDispatcher(){
	this.list = { get : [], post : [] } ;
	this.addListener = function(method, url, cb){
		this.list[method].push({ cb : cb, url : url }) ;
	}
}

HttpDispatcher.prototype.dispatch = function(req, res){
	var parsedUrl = require('url').parse(req.url, true).pathname ;
	var method = req.method.toLowerCase() ;
	for (i in this.list[method]){
		console.log(this.list[method][i].url);
		console.log(parsedUrl);
		var reg = new RegExp( '^' + this.list[method][i].url + '$', 'g' );
		//console.log(reg.test(parsedUrl));
		if( reg.test(parsedUrl) ){
			this.getFile(this.list[method][i].cb, req, res) ;
		}
	}
}

HttpDispatcher.prototype.getFile = function(path, req, res){
	require('fs').readFile(path, function (err, content){
		if(err){
			res.writeHead(500) ;
			res.end( 'Error loading file --> ' + err ) ;
		}
		res.writeHead(200) ;
		res.end(content) ;
	}) ;
}

module.exports = new HttpDispatcher() ;