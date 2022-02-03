const http = require('http')

const server = http.createServer((req,res) =>{
    if (req.url === '/'){
        res.end('welcome to our homepage')
    }
    if (req.url === '/about'){
        res.end('Here is our short history')
    }
    res.end(`
    <h1>Oops!</h>
    <p>We can't seem to find the page you are lookn for</p>
    <a href="/">Back home</a>
    `)
    
    
})
server.listen(5000);
