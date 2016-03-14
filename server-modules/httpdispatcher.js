function HttpDispatcher(){
	this.list = { get : [], post : [] } ;
	this.addListener = function(method, url, cb){
		this.list[method].push({ cb : cb, url : url }) ;
	}
}

HttpDispatcher.prototype.dispatch = function(req, res){
	var parsedUrl = require('url').parse(req.url, true).path ;
	var method = req.method.toLowerCase() ;
	var reg;
	var testResult = false;
	for (i in this.list[method]){
		reg = new RegExp( this.list[method][i].url, 'g' ) ;
		if( reg.test(parsedUrl) ){
			testResult = true ;
			this.getFile(this.list[method][i].cb, req, res) ;
		}
	}
	if(!testResult){
		this.getFile('server-pages/404.html', req, res) ;
	}
	testResult = false;
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