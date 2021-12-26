// let buffer = Buffer.alloc(3)
// let buffer = Buffer.from([1,3,5])
let buffer = Buffer.from('Laureano')

console.log(buffer);

let abc = Buffer.alloc(26)
console.log(abc);

for (let i = 0; i < 26; i++) {
  abc[i] = i + 97
}

console.log(abc.toString());
console.log(abc);