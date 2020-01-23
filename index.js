const createError = require('http-errors')
const express = require('express')
const app = express()
const cors = require('cors')
const hemlet = require('helmet')
// global variables
const port = process.env.PORT || 3000
// express midware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors({ optionsSuccessStatus: 204 }))
app.use(hemlet())
// set router
app.use('/', require('./routes'))
// catch 404
app.use((req, res, next) => {
  next(createError(404))
})
// error handler
app.use((err, req, res, next) => {
  const status = err.status || 500
  res.status(status).render('error.art', { status: status })
})
// running app
app.listen(port, () => {
  console.log(`App listening on port ${port}!`)
})
