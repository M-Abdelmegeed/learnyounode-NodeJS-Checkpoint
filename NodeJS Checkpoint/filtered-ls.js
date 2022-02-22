const fs= require('fs')
const path = process.argv[2]
const extension = process.argv[3]
fs.readdir(path,(err, list)=>{
if(err){
    console.error(err)
}
var j=0;
for(var i=0; i<list.length;i++){
    // console.log(list[i])
    if(list[i].substring(list[i].indexOf('.') + 1)===extension && list[i]!=extension){
        console.log(list[i])
    }
}
})