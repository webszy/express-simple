const express = require('express')
const router = express.Router()

/* GET home page. */
router.get('/', (req, res, next) => {
  res.json({
    code: 0,
    msg: 'ok'
  })
})

module.exports = router
