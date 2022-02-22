const fs = require('fs')

module.exports = function (directory,extension,callback){
    fs.readdir(directory,(err, list)=>{
        if(err){
            console.log(err)
            callback(err)
        }
        var j=0;
        x= new Array();
        for(var i=0; i<list.length;i++){
            // console.log(list[i])
            if(list[i].substring(list[i].indexOf('.') + 1)===extension && list[i]!=extension){
                // console.log(list[i])
                x[j]=list[i]
                j++
            }
        }
        callback(null, x)
        })
}