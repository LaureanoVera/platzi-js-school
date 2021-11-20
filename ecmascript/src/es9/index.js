const obj = {
  name: 'Laureano',
  age: 18,
  country: 'ARG'
}

let { name, ...all } = obj
console.log(name);
console.log(all);

const obj2 = {
  name:'Laureano',
  age:18
}

const obj1 = {
  ...obj2,
  country:'ARG'
}
console.log(obj1);

const helloWorld = () => {
  return new Promise((resolve, reject) => {
    (true)  
      ? setTimeout(() => {
        resolve('Hello World!')
      }, 3000)
      : reject(new Error('Test Error'))
  })
}
helloWorld()
  .then(res => console.log(res))
  .catch(err => console.log(err))
  .finally(() => console.log('Finalizo'))

// REGEX
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec('2018-04-20')
const year = match[1]
const month = match[2]
const day = match[3]
console.log(year, month, day);