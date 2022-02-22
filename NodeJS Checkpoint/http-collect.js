const http = require('http')
const bl = require('bl')
const url = process.argv[2]
http.get(url, (response)=>{
    response.pipe(bl(function (err, data) {
        if(err){
            console.error(err);
        }
        let count=0;
        for(var i=0; i<data.length; i++){
            if(data[i]!=" "){
                count++;
            }
        }
        console.log(count)
        console.log(data.toString())
    }))

})
