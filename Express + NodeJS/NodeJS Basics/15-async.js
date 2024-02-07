const http = require('http')


const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.end('Home Page')
    }
    if(req.url === '/abouts'){

        //Blocking code (synchronous code blocks res.end('about page) until loops excutes)
        
        for(let i=0;i<1000; i++){
            for(let i=0;i<1000; i++){
                console.log(`${i}`)
            }
        }
        res.end('about page')
    }

    res.end('error page')
})

server.listen(3000, () =>{
    console.log('server listening')
})