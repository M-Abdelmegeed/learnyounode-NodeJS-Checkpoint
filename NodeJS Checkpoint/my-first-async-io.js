const fs = require('fs')
const filePath = process.argv[2];
const buf = fs.readFile(filePath, function(err, data){
    if(err){
        console.error(err)
    }
    let count = 0;
    const charArray = [...data.toString()];
    for (const ch of charArray) {
        if (ch === "\n") {
            count++;
        }
    }
    console.log(count)
});
