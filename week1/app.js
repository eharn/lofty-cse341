
const http = require('http');

const server = http.createServer((req,res) => {
    // console.log(req);
    const url = req.url;
    if(url === '/') {
        res.setHeader('Content_Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Assigment 1</head>');
        res.write('<body><p>Welcom to my page!</p></body>');
        res.write('</html>');
        return res.end();
    }
    if(url === '/users') {
        res.setHeader('Content_Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Assigment 1</head>');
        res.write('<body><ul><li>User 1</li><li>User 2</li></ul></body>');
        res.write('</html>');
        return res.end();
    }
    //process.exit(); - closes the server if you wanted to, you wont
});

server.listen(3000);

// annonomous function
// http.createServer(function(rec,res){});

//can use instead of the annonomous function
// function rqListener(req, res) {
// }

// http.createServer(rqListener);