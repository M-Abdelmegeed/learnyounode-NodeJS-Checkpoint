const http = require('http')
const fs = require('fs')
const file = process.argv[3]
const server = http.createServer((req, res)=> {
// fs.createReadStream(file).pipe(res)
const stream= fs.createReadStream(file)
stream.pipe(res)
})
server.listen(process.argv[2])