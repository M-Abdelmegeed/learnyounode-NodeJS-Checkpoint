const mymodule = require('./mymodule.js')
const fs= require('fs')
const path = process.argv[2]
const extension = process.argv[3]
mymodule(path, extension, (err, data)=>{
    if(err){
        console.error(err)
    }else{
data.forEach(item=>{
    console.log(item)
})}
})