const os = require('os')

// console.log(os.arch());
// console.log(os.platform());
console.log(os.cpus().length);
// console.log(os.constants);
console.log(os.freemem());

const ZIZE = 1024
function kb(bytes) {return bytes / ZIZE}
function mb(bytes) {return kb(bytes) / ZIZE}
function gb(bytes) {return mb(bytes) / ZIZE}
console.log(Number(gb(os.freemem()).toFixed(2)));
console.log(gb(os.totalmem()))

console.log(os.homedir());
console.log(os.tmpdir());

console.log(os.hostname());
// console.log(os.networkInterfaces());