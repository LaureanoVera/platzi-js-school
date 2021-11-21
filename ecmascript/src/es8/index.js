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

// ASYNC AWAIT
const helloPromise = () => {
  return new Promise((resolve, reject) => {
    (true)
      ? setTimeout(() => {
        resolve('Hello World')
      }, 3000)
      : reject(new Error('Test Error'))
  })
}

const helloAsync = async () => {
  const hello = await helloPromise()
  console.log(hello);
}
helloAsync()

const anotherFuction = async () => {
  try {
    const hello = await helloPromise()
    console.log(hello);
  } catch(error) {
    console.log(error);
  }
}
anotherFuction()
