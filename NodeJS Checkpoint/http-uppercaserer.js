const http= require('http')
const map = require('through2-map')
const server = http.createServer((req, res)=>{
    // const buffer = []
    // req.on('data', (data)=>{
    //     buffer.push(data.toString())
    // })
    // req.on('end', ()=>{
    // const stream = buffer.join("").toUpperCase()
    // res.end(stream)
    // })
    req.pipe(map(function (data) {
        // if(err){
        //     console.error(err);
        // }else{
        return data.toString().toUpperCase()
    
      })).pipe(res)
})
server.listen(process.argv[2])