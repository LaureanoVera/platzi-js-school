const somethingWillHappen = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve("Hey!");
    } else {
      reject("Whoooops...");
    }
  });
};

somethingWillHappen()
  .then((response) => console.log(response))
  .catch((error) => console.error(error));

const somethingWillHappen2 = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      setTimeout(() => {
        resolve("True");
      }, 2000);
    } else {
      const error = new Error("Whoooops...");
      reject(error);
    }
  });
};

somethingWillHappen2()
  .then((response) => console.log(response))
  .catch((error) => console.error(error));

console.log('##### PROMISE ALL #####');
Promise.all([somethingWillHappen(), somethingWillHappen2()])
  .then((res) => {
    console.log("Results:", res);
  })
  .catch((err) => {
    console.error(err);
  });
