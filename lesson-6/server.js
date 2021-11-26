var http = require("http");

http.createServer(function (req, res) {
  res.write("hello from server");
  res.end();
}).listen(5000);
