function logErrors (err, req, res, next) {
  console.time('logErrors')
  console.error(err);
  next(err);
  console.timeEnd('logErrors')
}

function errorHandler (err, req, res, next) {
  console.time('errorHandler')
  res.status(500).json({
    message: err.message,
    stack: err.stack
  })
  console.timeEnd('errorHandler')
}

module.exports = { logErrors, errorHandler }
