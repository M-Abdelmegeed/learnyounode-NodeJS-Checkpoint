
const net = require('net')
const server = net.createServer(function (socket) {
const date = new Date()
const year = String(date.getFullYear())
var month=String(date.getMonth()+1)
if(Number(month)<10){
  month=0+month;
}
var day= String(date.getDate())
if(Number(day)<10){
  day=0+day;
}
var time = String(date.getHours())
if(Number(time)<10){
  time=0+time;
}
var minutes=  String(date.getMinutes())
if(Number(minutes)<10){
  minutes=0+minutes;
}
  socket.end(`${year}-${month}-${day} ${time}:${minutes}\n`)
})
server.listen(process.argv[2])

