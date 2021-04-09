require("dotenv").config();
const http = require("http");
const port = process.env.PORT;
console.log (port);
http.createServer(function (request, response) {
   
   response.writeHead(200, {'Content-Type': 'text/plain'});
   
  
   response.end('Hello World\n');
}).listen(port);


console.log (`Server running at http://127.0.0.1:${port}/`);