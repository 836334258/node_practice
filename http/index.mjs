import http from 'http'

const proxy=http.createServer((req,res)=>{
  res.writeHead(200,{
    'Content-Type':'text/plain'
  })
})


proxy.on('connect',(req,socket)=>{
  
})