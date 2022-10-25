const http=require("http")
const path=require("path")
const fs=require("fs").promises
const { resolve } = require("path")
const port=8080
const host="localhost"



   



const server=http.createServer(function (req,res) {
    let data=" ";
    switch(req.url){
        case "/":
            fs.readFile(__dirname+"/index.html")
            .then(content=>{
            res.setHeader('Content-type','text/html')
            res.writeHead(200)
            res.end(content)
            })
            .catch(err=>{
                res.writeHead(500)
                res.end(http.STATUS_CODES[500])
            })
         break;
        case "/about":
            fs.readFile(__dirname+"/about.html")
            .then(content=>{
            res.setHeader('Content-type','text/html')
            res.writeHead(200)
            res.end(content)
            })
            .catch(err=>{
                res.writeHead(500)
                res.end(http.STATUS_CODES[500])
            })
            break;
        case "/contact":
            fs.readFile(__dirname+"/contact.html")
            .then(content=>{
            res.setHeader('Content-type','text/html')
            res.writeHead(200)
            res.end(content)
            })
            .catch(err=>{
                res.writeHead(500)
                res.end(http.STATUS_CODES[500])
            })
            break;
        default:
            res.writeHead(404)
    res.end(http.STATUS_CODES[404])
    }
     


    })

    server.listen(port,host,function(){
        console.log('server is listening on port %d and on host %s', port,host)
    })
