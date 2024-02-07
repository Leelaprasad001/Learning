// HTTP


const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.end('Hello Worlds');
    }

    if(req.url === '/about')
    {
        res.write("hello")
        res.end();
    }
    // if(req.url === '/courses'){
    //     res.write();
    //     res.end(JSON.stringify([1, 2, 3]));
    // }
    res.end(
        '<h1>OOPS</h1> <p>Page not found</p><a href="/">Go back to home</a>'
    )
});


server.listen(3000)
// server.listen(3000, () => {
//     console.log('Server is running...');
// });
