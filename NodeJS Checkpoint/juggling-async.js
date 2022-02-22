// const http = require('http')
// const bl = require('bl')
// // const url = process.argv[2]
// for(var i=2; i<5; i++){
// http.get(process.argv[i], (response)=>{
//     response.pipe(bl(function (err, data) {
//         if(err){
//             console.error(err);
//         }
//         console.log(data.toString())
//     }))
// })
// }

const http = require("http");
const getResult = (url) => {
    return new Promise((resolve, reject) => {
        const buffer = [];
        http.get(url, (res) => {
            res.on("data", (data) => {
                buffer.push(data.toString());
            });
            res.on("end", () => {
                resolve(buffer.join(""));
            });
        });
    });
};

getResult(process.argv[2]).then((res) => {
    console.log(res);
    getResult(process.argv[3]).then((res) => {
        console.log(res);
        getResult(process.argv[4]).then((res) => {
            console.log(res);
        });
    });
});
