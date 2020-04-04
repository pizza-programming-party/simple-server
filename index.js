const http = require('http');

const port = 8080;

const server = http.createServer((req, res) => {
    console.log(`The page "${req.url}" was requested.`);
    res.writeHead(200, { 'Content-Type': 'text/plain' });
  	res.end('hello!\n');
});

server.listen(port, () => {
    console.log(`The server is running on port number ${port}.`);
})