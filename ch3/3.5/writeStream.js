const fs = require('fs');
const writeStream = fs.createWriteStream('./1.txt');

writeStream.on('finish', () => {
    console.log("파일 쓰기 끝!");
})

writeStream.write("북수원");
writeStream.write("도서관입니다");