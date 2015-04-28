var dispatcher = require('./module-02') ;
console.log("Server is up and running...n") ;
dispatcher.addListener("get", "/my_page", function(req, res) { 
  res.writeHead(200, {'Content-Type': 'text/plain'}) ;
  res.end('Hello World!') ;
}) ;
dispatcher.showList() ;