function Controller(res, cfg){
	this.errors = [];
	this.config = cfg;
	this.response = res;
}

Controllers.prototype._checkUrl = function(){
	var url = this.response.url.toString();
	var regExp = ^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?;

	if (regExp.test(url, 'g')) {
		return true;
	}else{
		this.errors.push({"url" : "this url doesn't match."});
		return false;
	};
}

Controllers.prototype._redirect = function(code, header){
	var url = this.response.url.toString();
	var regExp = 
	if () 
	response.writeHead(302, {
	  'Location': '/server-pages/page_404.html'
	  //add other headers here...
	});
	response.end();
}

module.exports = new Controller();