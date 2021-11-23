// Global Scope
var msg = "Laureano";

// Function Scope
var $ = function (msg) {
  console.log(`Say: ${msg}`);
};

function printNumbers() {
  for (var i = 0; i < 10; i++) {
    function printEventuallyNumber(n) {
      setTimeout(() => {
        console.log(n);
      }, 100);
    }
    printEventuallyNumber (i);
  }
}
printNumbers();

// Block Scope
function printNumbers2() {
  for (let i = 0; i < 10; i++) {
    setTimeout(() => {
      console.log(i);
    }, 100);
  }
}
printNumbers2();
