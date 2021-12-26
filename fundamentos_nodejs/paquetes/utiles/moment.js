const moment = require("moment");

let ahora = moment();

console.log(ahora.toLocaleString());
console.log(ahora.format('D/MM/YYYY - HH:mm'));
