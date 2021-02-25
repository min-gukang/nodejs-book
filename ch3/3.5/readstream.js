const fs = require('fs');
const readStream = fs.createReadStream('./1.txt', {highWaterMark : 16});

console.log("Buffer :", Buffer);
let dataArr = [];
readStream.on('data', (chunk) => {
    dataArr.push(chunk);
    console.log("저는 buffer입니다", chunk, chunk.length);
})

readStream.on('end', () => {
    console.log('end :', Buffer.concat(dataArr));
    console.log(dataArr.toString());
})

