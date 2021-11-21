function sum(num1, num2) {
  return num1 + num2;
}

function res(num1, num2) {
  return num1 - num2;
}

function calc(num1, num2, callback) {
  return callback(num1, num2);
}

console.log(calc(2, 3, sum));
console.log(calc(12, 5, res));

// =================== =================== //
function date(callback) {
  console.log(new Date());
  setTimeout(() => {
    let date = new Date();
    callback(date);
  }, 5000);
}

function printDate(dateNow) {
  console.log(dateNow);
}

date(printDate)