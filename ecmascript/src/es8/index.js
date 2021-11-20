// ENTRIES
const data = {
  frontend: "Laureano",
  backend: "Lihuel",
  design: "Maria",
};

const entries = Object.entries(data)
console.log(entries);
console.log(entries.length);

// VALUES
const data2 = {
  frontend: "Laureano",
  backend: "Lihuel",
  design: "Maria",
};

const values = Object.values(data2)
console.log(values);
console.log(values.length);

const string = 'hello'
console.log(string.padStart(7, 'hi'));
console.log(string.padEnd(12, '...'));