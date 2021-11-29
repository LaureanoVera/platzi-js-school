function* someGenerator() {
  console.log("Generator Start");
  yield 'Hi!'
  yield 'Age:'
  yield 19;
  console.log("Generator End");
}

const gen = someGenerator();

// ===== ===== ===== ===== =====
function* idMaker() {
  let id = ((Math.random() * 1000) + 500).toFixed(2)
  while(true) {
    yield id
    id = ((Math.random() * 1000) + 500).toFixed(2)
  }
}

function* idMakerWithReset() {
  let id = Number(((Math.random() * 1000) + 500).toFixed(2))
  let reset;
  while(true) {
    reset = yield id
    if (reset) {
      id = 777
    } else {
      id = Number(((Math.random() * 1000) + 500).toFixed(2))
    }
  }
}

const id = idMaker()
const idReset = idMakerWithReset()

// ===== ===== ===== ===== =====
function* fibonacci () {
  let a = 1
  let b = 1
  while(true) {
    const nextNumber = a + b
    a = b
    b = nextNumber
    yield nextNumber
  }
}

const fiboGen = fibonacci()