var http = require("http");
var page = `<h1>First heading</h1><P>This is my demo node js html website</P>`;
http
  .createServer(function (req, res) {
    res.write(page);
    res.end();
  })
  .listen(8080);
