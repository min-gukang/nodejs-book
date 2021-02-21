// import { odd, even } from './var';
const os = require('os');
const path = require('path');

function checkOddOrEven(num) {
  if (num % 2) { // 홀수면
    return odd;
  }
  return even;
}

console.log(path.basename(__filename));

// export default checkOddOrEven;
