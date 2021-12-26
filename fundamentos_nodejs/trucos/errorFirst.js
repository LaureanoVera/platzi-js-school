function asincrona(callback) {
  setTimeout(() => {
    try {
      let a = 3 + z;
      callback(null, a);
    } catch (error) {
      callback(error);
    }
  }, 1000);
}

asincrona((err, data) => {
  if (err) {
    console.error("Tenemos un error");
    console.error(err);

    throw err;
    // return false
  }
  console.log("Todo salio bien");
  console.log(data);
});
