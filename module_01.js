var url = require('url') ;
var parseHostName = function(input) {
  var parsed = parse(input) ;
  return (parsed != null) ? parsed.hostname : null ;
}
var parseProtocol = function(input) {
  var parsed = parse(input) ;
  return (parsed != null) ? parsed.protocol : null ;
}
 // Can not be invoked (private function)
var parse = function(s) {
  return url.parse(s) ;
}
// Defining public functions
exports.getHostName = parseHostName ;
exports.getProtocol = parseProtocol ;