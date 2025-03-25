// Create web server
// Create a web server that listens on port 3000 and serves the comments.html file. Use the fs module to read the file and send it to the client.
// The comments.html file should be served at the root URL (http://localhost:3000/).

exports.createServer = function() {
  var http = require('http');
  var fs = require('fs');

  var server = http.createServer(function(request, response) {
    response.writeHead(200, { 'Content-Type': 'text/html' });
    fs.createReadStream('comments.html').pipe(response);
  });

  server.listen(3000);
}git add comments.js