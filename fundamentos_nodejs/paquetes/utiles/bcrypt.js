const bcrypt = require('bcrypt')

const password = '1234Segura!0001'

bcrypt.hash(password, 5, (err, hash) => {
  console.log(hash);

  bcrypt.compare(password, hash, (err, res) => {
    console.log(res);
  })
})