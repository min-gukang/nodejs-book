const crypto = require('crypto');
const password = 'password';
const salt = 'salt';
const start = Date.now();
const os = require('process');

console.log(process.env.UV_THREADPOOL_SIZE);

// 기본 threadpool size가 4개이기 때문에 4개씩 묶어서 진행된다. 
// crypto.pbkdf2(password, salt, 10_000_000, 128, 'sha512', () => {
//     console.log("1", Date.now()-start);
// });
// crypto.pbkdf2(password, salt, 10_000_000, 128, 'sha512', () => {
//     console.log("2", Date.now()-start);
// });
// crypto.pbkdf2(password, salt, 10_000_000, 128, 'sha512', () => {
//     console.log("3", Date.now()-start);
// });
// crypto.pbkdf2(password, salt, 10_000_000, 128, 'sha512', () => {
//     console.log("4", Date.now()-start);
// });
// crypto.pbkdf2(password, salt, 10_000_000, 128, 'sha512', () => {
//     console.log("5", Date.now()-start);
// });
// crypto.pbkdf2(password, salt, 10_000_000, 128, 'sha512', () => {
//     console.log("6", Date.now()-start);
// });
// crypto.pbkdf2(password, salt, 10_000_000, 128, 'sha512', () => {
//     console.log("7", Date.now()-start);
// });
// crypto.pbkdf2(password, salt, 10_000_000, 128, 'sha512', () => {
//     console.log("8", Date.now()-start);
// });