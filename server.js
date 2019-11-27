const http = require('http');

const hostname='localhost';
const port =3002;

const server = http.createServer((req,res) =>{
    res.statusCode =200;
    res.setHeader('content-type','text/HTML');
    res.end('<h1>Hello world</h1>');
});

server.listen(port,hostname,()=>{
    console.log(`Server is running at http://${hostname}:${port}`);
});