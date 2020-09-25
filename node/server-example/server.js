const http = require("http");

const server = http.createServer((req, res) => {
  res.end(`Server is up \n Max HTTP header size is ${http.maxHeaderSize}`);
});

server.listen(9000, () => {
  console.log(`Server started at port http://127.0.0.1:9000`);
});
